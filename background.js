const lbh = '[Pond0x-Miner-Background]';

console.log(`${lbh} - Background script loaded`);

// Keep-alive mechanism
const KEEP_ALIVE_INTERVAL = 30000; // 30 seconds
setInterval(() => {
    console.log(`${lbh} - Background script keep-alive ping at ${new Date().toISOString()}`);
}, KEEP_ALIVE_INTERVAL);

// Store the ID of the status tab
let statusTabId = null;

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(`${lbh} - Received message:`, message);

    if (message.type === 'notify') {
        console.log(`${lbh} - Received notification request: ${message.title} - ${message.body}`);
        chrome.notifications.create('', {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: message.title,
            message: message.body,
            priority: 1
        }, (notificationId) => {
            if (chrome.runtime.lastError) {
                console.error(`${lbh} - Failed to create notification: ${chrome.runtime.lastError.message}`);
            } else {
                console.log(`${lbh} - Notification created with ID: ${notificationId}`);
            }
        });
        sendResponse({ success: true });
    } else if (message.type === 'startStatusPolling') {
        console.log(`${lbh} - Received startStatusPolling request from tab ${sender.tab.id}`);

        if (statusTabId !== null) {
            chrome.tabs.get(statusTabId, (tab) => {
                if (chrome.runtime.lastError || !tab) {
                    console.log(`${lbh} - Previous status tab ${statusTabId} is invalid or closed, creating new tab`);
                    statusTabId = null;
                } else {
                    console.log(`${lbh} - Reusing existing status tab ${statusTabId}`);
                    sendResponse({ success: true, tabId: statusTabId });
                    return;
                }
            });
        }

        if (statusTabId === null) {
            chrome.tabs.create({
                url: 'https://cary0x.github.io/status-mini/',
                active: false
            }, (tab) => {
                if (chrome.runtime.lastError) {
                    console.error(`${lbh} - Failed to create status tab: ${chrome.runtime.lastError.message}`);
                    sendResponse({ success: false, error: 'Failed to create status tab' });
                    return;
                }
                statusTabId = tab.id;
                console.log(`${lbh} - Created status tab with ID ${statusTabId}`);

                chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                    if (tabId === statusTabId && changeInfo.status === 'complete') {
                        chrome.tabs.onUpdated.removeListener(listener);
                        console.log(`${lbh} - Status tab ${tabId} fully loaded, ready for continuous updates`);
                        sendResponse({ success: true, tabId: statusTabId });
                    }
                });
            });
        }
    } else if (message.type === 'statusFromTab') {
        console.log(`${lbh} - Received status from tab ${sender.tab.id}: ${message.status} at ${new Date().toISOString()}`);

        chrome.tabs.query({ url: "https://www.pond0x.com/mining*" }, (tabs) => {
            if (tabs.length === 0) {
                console.error(`${lbh} - No pond0x.com tab found to send status at ${new Date().toISOString()}`);
                return;
            }
            const pond0xTab = tabs[0];
            chrome.tabs.sendMessage(pond0xTab.id, { type: 'miningStatus', status: message.status }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error(`${lbh} - Failed to send status to tab ${pond0xTab.id}: ${chrome.runtime.lastError.message} at ${new Date().toISOString()}`);
                } else {
                    console.log(`${lbh} - Sent status "${message.status}" to tab ${pond0xTab.id} at ${new Date().toISOString()}`);
                }
            });
        });
    } else if (message.type === 'closeStatusTab') {
        if (statusTabId !== null) {
            chrome.tabs.remove(statusTabId, () => {
                if (chrome.runtime.lastError) {
                    console.error(`${lbh} - Failed to close status tab ${statusTabId}: ${chrome.runtime.lastError.message}`);
                } else {
                    console.log(`${lbh} - Successfully closed status tab ${statusTabId}`);
                }
                statusTabId = null;
            });
        } else {
            console.warn(`${lbh} - No status tab to close (statusTabId is null)`);
        }
    } else if (message.action === 'openTab') {
        console.log(`${lbh} - Opening hidden tab for manifest scraping at ${message.url}`);
        chrome.tabs.create({ url: message.url, active: false }, (tab) => {
            if (chrome.runtime.lastError) {
                console.error(`${lbh} - Error creating tab for manifest scraping: ${chrome.runtime.lastError.message}`);
                sendResponse(null);
                return;
            }
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                if (tabId === tab.id && changeInfo.status === 'complete') {
                    chrome.tabs.onUpdated.removeListener(listener);
                    console.log(`${lbh} - Manifest tab ${tabId} fully loaded`);
                    sendResponse(tab.id);
                }
            });
        });
        return true;
    } else if (message.action === 'injectManifestScript') {
        const tabId = message.tabId;
        const walletAddress = message.walletAddress;
        const swapperTabId = sender.tab.id; // Capture the swapper tab ID
        console.log(`${lbh} - Injecting script into manifest tab ${tabId} with wallet address ${walletAddress} for swapper tab ${swapperTabId}`);

        function scrapeManifest(walletAddress, manifestTabId, swapperTabId) {
            const input = document.querySelector('input.fetchInput_Paim');
            if (!input) {
                console.error('[Scrape] - Input field not found');
                chrome.runtime.sendMessage({ action: 'scrapedSwaps', swaps: 'Error', tabId: manifestTabId });
                return;
            }
            input.focus();
            input.value = walletAddress;
            input.dispatchEvent(new Event('focus', { bubbles: true }));
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'Enter' }));
            console.log('[Scrape] - Wallet address set and events dispatched');

            setTimeout(() => {
                const submitButton = document.querySelector('button.fetchButton_DZdg');
                if (!submitButton) {
                    console.error('[Scrape] - Submit button not found');
                    chrome.runtime.sendMessage({ action: 'scrapedSwaps', swaps: 'Error', tabId: manifestTabId });
                    return;
                }
                if (submitButton.disabled) {
                    console.log('[Scrape] - Submit button is disabled, forcing enable');
                    submitButton.disabled = false;
                }
                submitButton.click();
                console.log('[Scrape] - Submit button clicked');

                setTimeout(() => {
                    const swapsElement = document.querySelector('.dataValue_ZGfY');
                    const swaps = swapsElement ? swapsElement.textContent.trim() : 'N/A';
                    console.log('[Scrape] - Scraped swaps: ' + swaps);
                    chrome.runtime.sendMessage({ action: 'scrapedSwaps', swaps: swaps, tabId: manifestTabId, targetTabId: swapperTabId });
                    // Close the tab after sending the message
                    setTimeout(() => {
                        chrome.runtime.sendMessage({ action: 'closeManifestTab', tabId: manifestTabId });
                    }, 500);
                }, 3000);
            }, 500);
        }

        chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: scrapeManifest,
            args: [walletAddress, tabId, swapperTabId]
        }, (results) => {
            if (chrome.runtime.lastError) {
                console.error(`${lbh} - Error injecting script into tab ${tabId}: ${chrome.runtime.lastError.message}`);
                chrome.tabs.sendMessage(swapperTabId, { action: 'scrapedSwaps', swaps: 'Error', tabId: tabId });
            }
        });
    } else if (message.action === 'scrapedSwaps' && message.targetTabId) {
        // Relay the message to the swapper tab
        console.log(`${lbh} - Relaying scraped swaps '${message.swaps}' to swapper tab ${message.targetTabId}`);
        chrome.tabs.sendMessage(message.targetTabId, {
            action: 'scrapedSwaps',
            swaps: message.swaps,
            tabId: message.tabId
        });
    } else if (message.action === 'closeManifestTab') {
        const tabId = message.tabId;
        chrome.tabs.remove(tabId, () => {
            if (chrome.runtime.lastError) {
                console.error(`${lbh} - Error closing manifest tab ${tabId}: ${chrome.runtime.lastError.message}`);
            } else {
                console.log(`${lbh} - Successfully closed manifest tab ${tabId}`);
            }
        });
    }

    return true;
});

// Verify runtime connection
chrome.runtime.onStartup.addListener(() => {
    console.log(`${lbh} - Extension started`);
});

chrome.runtime.onInstalled.addListener(() => {
    console.log(`${lbh} - Extension installed/updated`);
});
