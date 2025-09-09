(async function() {
    'use strict';

    const lh = '[Pond0x-Miner]';

    const GM = {
    setValue: (key, value) => {
        return new Promise((resolve) => {
            try {
                chrome.storage.local.set({ [key]: value }, () => {
                    if (chrome.runtime.lastError) {
                        console.error(`${lh} - Error in GM.setValue for ${key}:`, chrome.runtime.lastError.message);
                        resolve(false);
                        return;
                    }
                    resolve(true);
                });
            } catch (error) {
                console.error(`${lh} - Context invalidated or other error in GM.setValue for ${key}:`, error.message);
                resolve(false);
            }
        });
    },
    getValue: (key, defaultValue) => {
        return new Promise((resolve) => {
            try {
                chrome.storage.local.get([key], (result) => {
                    if (chrome.runtime.lastError) {
                        console.error(`${lh} - Error in GM.getValue for ${key}:`, chrome.runtime.lastError.message);
                        resolve(defaultValue);
                        return;
                    }
                    resolve(result[key] !== undefined ? result[key] : defaultValue);
                });
            } catch (error) {
                console.error(`${lh} - Context invalidated or other error in GM.getValue for ${key}:`, error.message);
                resolve(defaultValue);
            }
        });
    }
};

console.log(`${lh} *** MINER AUTOMATION RUNNING ***`);

    window.addEventListener('error', (event) => {
        console.warn(`${lh} - External script error: ${event.message} at ${event.filename}:${event.lineno}`);
    });

    const getTime = () => Math.floor(new Date().getTime() / 1000);
    const searchNodeByContent = (tag, content, exactMatch = true, parent = document) => {
    try {
        const elements = parent.getElementsByTagName(tag);
        for (let element of elements) {
            const text = element.textContent.trim();
            if (exactMatch ? text === content : text.includes(content)) {
                if (element.offsetParent !== null && !element.disabled) {
                    return element;
                }
            }
        }
        return null;
    } catch (error) {
        console.error(`${lh} - Error in searchNodeByContent:`, error.message);
        return null;
    }
};
    const getLCDParams = () => {
        const params = {};
        const nodeLines = document.querySelectorAll('.lcdbox');
        for (let l = 0; l < nodeLines.length; l++) {
            const nodeLine = nodeLines[l];
            const nodeChars = nodeLine.childNodes;
            let paramName = '', paramValue = '', nameOk = false;
            for (let c = 0; c < nodeChars.length; c++) {
                const content = (nodeChars[c].textContent || '').trim().toLowerCase();
                if (!nameOk) {
                    if (content === ':') { nameOk = true; continue; }
                    if (content && content !== ' ') paramName += content;
                } else if (content && content !== ' ') paramValue += content;
            }
            if (paramName && nameOk) params[paramName] = paramValue;
        }
        return params;
    };
    const getTimeMS = (seconds) => seconds * 1000;

    let lastNotificationTime = 0;
    const NOTIFICATION_INTERVAL = 20000;

    const notifyUser = (title, body) => {
        const now = Date.now();
        if (now - lastNotificationTime < NOTIFICATION_INTERVAL) {
            console.log(`${lh} - Notification throttled to avoid overload: ${title} - ${body}`);
            return;
        }
        lastNotificationTime = now;
        chrome.runtime.sendMessage({ type: 'notify', title, body });
    };

    const waitForPageLoad = async (maxAttempts = 30, retryDelay = 1000) => {
        let attempts = 0;
        while (document.readyState !== 'complete' && attempts < maxAttempts) {
            console.log(`${lh} - Waiting for page to fully load (attempt ${attempts + 1}/${maxAttempts})...`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));
            attempts++;
        }
        if (document.readyState !== 'complete') {
            console.error(`${lh} - Page did not fully load after ${maxAttempts} attempts. Proceeding anyway...`);
            notifyUser('Pond0x Warning', 'Page did not fully load. Some features may not work correctly.');
        } else {
            console.log(`${lh} - Page fully loaded.`);
        }
    };

    window.pond0xO = {
        claimInterval: 30,
        runInterval: 5,
        noClaimMaxTime: 3600,
        startTime: getTime()
    };

    let isMiningActive = false;
    let isMiningRunning = false;
    let isClaiming = false;
    let statusLock = false;
    let lastStatusCheckTime = 0;
    let pageReloads = 0;
    let lastClaimValue = 0;
    let lastClaimTime;
    let lastStatusMessage = '';
    let reloadReason;
    let summaryBoxCreated = false;
    let miningStatuses = [];
    let isPaused;
    let consecutiveStoppedCount = 0;
    let currentGlobalStatus = 'Unknown';
    let nextRetryTime = null;
    let runTimeout = null;
    let isAutoMode;
    let isRunExecuting = false;
    let isControlPanelReady = false;
    let claimCount;
    let totalClaimed;
    let lastClaimStored;
    let pageReloadsStored;
    let reloadReasonStored;
    let claimTimes;
    let historicalClaims;
    let dailyClaims;
    let autominerManuallyStarted;
    let watchdogInterval;
    let claimIntervalMinutes;
    let smartClaimThreshold;
    let smartClaimUnit;
    let isSmartClaimEnabled;
    let lastRenderedTotalClaimed;
    let lastRenderedLastClaim;
    let isClaimWaitMode;
    let claimWaitPeriodMinutes;
    let isErrorStateRestartEnabled;
const initializeVariables = async () => {
    try {
        lastClaimTime = await GM.getValue('pond0xLastClaimTime', 0);
        reloadReason = await GM.getValue('pond0xReloadReason', 'Initial Load');
        isPaused = await GM.getValue('pond0xMinerIsPaused', false);
        isAutoMode = await GM.getValue('pond0xIsAutoMode', true);
        claimCount = await GM.getValue('pond0xClaimCount', 0);
        totalClaimed = await GM.getValue('pond0xTotalClaimed', 0);
        lastClaimStored = await GM.getValue('pond0xLastClaim', 0);
        pageReloadsStored = await GM.getValue('pond0xPageReloads', 0);
        reloadReasonStored = await GM.getValue('pond0xReloadReason', 'Initial Load');
        claimTimes = JSON.parse(await GM.getValue('pond0xClaimTimes', '[]'));
        historicalClaims = JSON.parse(await GM.getValue('pond0xHistoricalClaims', '[]'));
        dailyClaims = JSON.parse(await GM.getValue('pond0xDailyClaims', '{}'));
        autominerManuallyStarted = await GM.getValue('pond0xAutominerStarted', false);

        // Reset autominerManuallyStarted in Manual mode or if no manual start in Auto mode
        if (!isAutoMode || (!autominerManuallyStarted && pageReloadsStored > 0)) {
            try {
                autominerManuallyStarted = false;
                await GM.setValue('pond0xAutominerStarted', false);
                console.log(`${lh} - Reset autominerManuallyStarted to false on page reload in ${isAutoMode ? 'Auto' : 'Manual'} mode`);
            } catch (error) {
                console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
            }
        }

        watchdogInterval = 5 * 60 * 1000;
        claimIntervalMinutes = await GM.getValue('pond0xClaimIntervalMinutes', 150);
        smartClaimThreshold = await GM.getValue('pond0xSmartClaimThreshold', 200000000);
        smartClaimUnit = await GM.getValue('pond0xSmartClaimUnit', 'Million');
        isSmartClaimEnabled = await GM.getValue('pond0xIsSmartClaimEnabled', false);
        isClaimWaitMode = await GM.getValue('pond0xIsClaimWaitMode', false);
        claimWaitPeriodMinutes = await GM.getValue('pond0xClaimWaitPeriodMinutes', 20);
        isErrorStateRestartEnabled = await GM.getValue('pond0xIsErrorStateRestartEnabled', false);

        lastRenderedTotalClaimed = totalClaimed;
        lastRenderedLastClaim = lastClaimValue;

        if (totalClaimed < 10000 && totalClaimed > 0) {
            console.log(`${lh} - Converting totalClaimed from ${totalClaimed} million to ${totalClaimed * 1000000} raw tokens`);
            totalClaimed *= 1000000;
            try {
                await GM.setValue('pond0xTotalClaimed', totalClaimed);
            } catch (error) {
                console.error(`${lh} - Failed to set totalClaimed:`, error.message);
            }
        }
        if (lastClaimStored < 10000 && lastClaimStored > 0) {
            console.log(`${lh} - Converting lastClaim from ${lastClaimStored} million to ${lastClaimStored * 1000000} raw tokens`);
            lastClaimValue = lastClaimStored * 1000000;
            try {
                await GM.setValue('pond0xLastClaim', lastClaimValue);
            } catch (error) {
                console.error(`${lh} - Failed to set lastClaimValue:`, error.message);
            }
        } else {
            lastClaimValue = lastClaimStored;
        }

        pageReloads = pageReloadsStored + 1;
        try {
            await GM.setValue('pond0xPageReloads', pageReloads);
        } catch (error) {
            console.error(`${lh} - Failed to set pageReloads:`, error.message);
        }

        // Check for existing wait period, but only resume if manually started
        let waitUntil = await GM.getValue('pond0xWaitUntil', 0);
        if (!autominerManuallyStarted && isClaimWaitMode) {
            // Reset waitUntil if not manually started to prevent premature session start
            try {
                waitUntil = 0;
                await GM.setValue('pond0xWaitUntil', 0);
                console.log(`${lh} - Cleared waitUntil as autominer was not manually started`);
            } catch (error) {
                console.error(`${lh} - Failed to clear waitUntil:`, error.message);
            }
        }

        if (isClaimWaitMode && waitUntil > getTime() && autominerManuallyStarted) {
            isPaused = true;
            try {
                await GM.setValue('pond0xMinerIsPaused', true);
                console.log(`${lh} - Resuming wait from previous claim, pausing until ${new Date(waitUntil * 1000).toISOString()}`);
            } catch (error) {
                console.error(`${lh} - Failed to set isPaused:`, error.message);
            }
            setTimeout(async () => {
                try {
                    isPaused = false;
                    await GM.setValue('pond0xMinerIsPaused', false);
                    console.log(`${lh} - Wait period completed, resuming...`);
                    if (isAutoMode && autominerManuallyStarted) {
                        // Only start mining if manually initiated
                        await startMining();
                    } else {
                        const toggleMiningBtn = document.getElementById('toggleMiningBtn');
                        if (toggleMiningBtn) {
                            toggleMiningBtn.textContent = 'Start Manual Mining';
                            toggleMiningBtn.style.background = '#28a745';
                        }
                    }
                } catch (error) {
                    console.error(`${lh} - Error during wait period resumption:`, error.message);
                }
            }, (waitUntil - getTime()) * 1000);
        }
    } catch (error) {
            console.error(`${lh} - Error in initializeVariables:`, error.message);
            try {
                notifyUser('Pond0x Error', `Initialization failed: ${error.message}`);
            } catch (notifyError) {
                console.error(`${lh} - Failed to send initialization error notification:`, notifyError.message);
            }
        }
    };

    const getFreshSmartClaimSettings = async () => {
        try {
            const enabled = await GM.getValue('pond0xIsSmartClaimEnabled', false);
            const threshold = await GM.getValue('pond0xSmartClaimThreshold', 200000000);
            const intervalMinutes = await GM.getValue('pond0xClaimIntervalMinutes', 150);
            return { enabled, threshold, intervalMinutes };
        } catch (error) {
            console.error(`${lh} - Error getting fresh Smart Claim settings:`, error.message);
            return { 
                enabled: isSmartClaimEnabled, 
                threshold: smartClaimThreshold, 
                intervalMinutes: claimIntervalMinutes 
            };
        }
    };

    await initializeVariables();

    if (window.location.href.startsWith('https://cary0x.github.io/status-mini/')) {
        console.log(`${lh} - Running on status-mini page, starting continuous status polling...`);

        const scrapeStatusContinuously = () => {
            let lastStatus = null;
            let intervalId = null;
            let attempt = 0;

            const pollStatus = () => {
                attempt++;
                try {
                    const statusElement = document.querySelector('p[style="font-size: 1em; font-weight: bold; margin: 1px 10px 0px 0px;"]');
                    if (statusElement) {
                        const statusText = statusElement.textContent.trim();
                        const statusMatch = statusText.match(/Mining:\s*(Stopped|Struggling|Active)/i);
                        const status = statusMatch ? `Mining: ${statusMatch[1]}` : 'Unknown';
                        console.log(`${lh} - Attempt ${attempt}: Scraped status from status-mini page: ${status}`);

                        if (status !== lastStatus) {
                            chrome.runtime.sendMessage({ type: 'statusFromTab', status: status }, (response) => {
                                if (chrome.runtime.lastError) {
                                    console.error(`${lh} - Attempt ${attempt}: Failed to send status to background: ${chrome.runtime.lastError.message}`);
                                } else {
                                    console.log(`${lh} - Attempt ${attempt}: Sent status to background successfully: ${status}`);
                                }
                            });
                            lastStatus = status;
                        } else {
                            console.log(`${lh} - Attempt ${attempt}: Status unchanged: ${status}, skipping send`);
                        }

                        if (status === 'Mining: Active') {
                            clearInterval(intervalId);
                            console.log(`${lh} - Attempt ${attempt}: Detected "Mining: Active", stopping continuous polling`);
                        }
                    } else {
                        console.warn(`${lh} - Attempt ${attempt}: Status element not found, retrying...`);
                    }
                } catch (error) {
                    console.error(`${lh} - Attempt ${attempt}: Error in status polling loop: ${error.message}, retrying...`);
                }
            };

            intervalId = setInterval(pollStatus, 1000);
        };

        if (document.readyState === 'complete') {
            scrapeStatusContinuously();
        } else {
            window.addEventListener('load', scrapeStatusContinuously);
        }

        return;
    }

const executeClaimWithVerification = async (originalButton, buttonText) => {
    try {
        // Wait a moment for DOM to stabilize
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Re-verify button is still clickable
        const freshButton = searchNodeByContent('button', buttonText);
        if (freshButton && freshButton.offsetParent !== null && !freshButton.disabled) {
            console.log(`${lh} - Verified and clicking button: ${buttonText}`);
            freshButton.click();
            return true;
        } else {
            console.warn(`${lh} - Button verification failed for: ${buttonText}`);
            // Fall back to original button if fresh search fails
            if (originalButton && originalButton.offsetParent !== null && !originalButton.disabled) {
                console.log(`${lh} - Using original button as fallback: ${buttonText}`);
                originalButton.click();
                return true;
            }
            return false;
        }
    } catch (error) {
        console.error(`${lh} - Error in executeClaimWithVerification:`, error.message);
        return false;
    }
};

const performDailyReset = async () => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastResetDate = new Date(await GM.getValue('pond0xLastResetDate', '1970-01-01'));
        const todayStr = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        const lastResetStr = lastResetDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        console.log(`${lh} - Checking last reset date: ${lastResetStr} against today: ${todayStr}`);

        if (lastResetStr !== todayStr) {
            console.log(`${lh} - New day detected. Last reset (${lastResetStr}) differs from today (${todayStr}). Performing reset now...`);
            claimCount = 0;
            totalClaimed = 0;
            pageReloads = 0;
            lastClaimValue = 0;
            await GM.setValue('pond0xClaimCount', 0);
            await GM.setValue('pond0xTotalClaimed', 0);
            await GM.setValue('pond0xPageReloads', 0);
            await GM.setValue('pond0xLastClaim', 0);
            await GM.setValue('pond0xLastResetDate', today.toISOString());
            await GM.setValue('pond0xClaimTimes', JSON.stringify([]));
            console.log(`${lh} - Reset claimCount, totalClaimed, pageReloads, lastClaimValue, and claimTimes to 0 for today: ${todayStr}`);
            await updateClaimSummaryBox();
        } else {
            console.log(`${lh} - Last reset (${lastResetStr}) is today. No reset needed.`);
        }
    };

    const observeLCDContainer = () => {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length || mutation.type === 'attributes' || mutation.type === 'characterData') {
                    if (mutation.target.nodeType === Node.ELEMENT_NODE) {
                        const lcdContainer = mutation.target.querySelector('.screenshadow') ||
                                            mutation.target.querySelector('.bg-\\[\\#414f76\\]') ||
                                            mutation.target.querySelector('.mining-display') ||
                                            mutation.target.querySelector('.lcd-container') ||
                                            mutation.target.querySelector('.mining-section') ||
                                            mutation.target.querySelector('[class*="mining"]') ||
                                            document.querySelector('.mining-section') ||
                                            document.querySelector('[class*="mining"]');
                        if (lcdContainer && !summaryBoxCreated) {
                            const isVisible = lcdContainer.offsetWidth > 0 && lcdContainer.offsetHeight > 0;
                            console.log(`${lh} - LCD container found via observer: ${lcdContainer.tagName}.${Array.from(lcdContainer.classList).join('.')}, Visible: ${isVisible}`);
                            if (isVisible) {
                                observer.disconnect();
                                const existingBox = document.getElementById('pond0xClaimSummary');
                                if (existingBox) {
                                    existingBox.remove();
                                    console.log(`${lh} - Removed existing summary box before repositioning`);
                                }
                                createSummaryBoxNow(lcdContainer);
                                summaryBoxCreated = true;
                            } else {
                                console.log(`${lh} - LCD container found but not visible, continuing to observe...`);
                            }
                        }
                    }
                }
            }
        });

        observer.observe(document.body, { childList: true, attributes: true, characterData: true, subtree: true });
        setTimeout(() => {
            if (!summaryBoxCreated) {
                console.log(`${lh} - Observer timed out after 30 seconds, disconnecting...`);
                observer.disconnect();
                if (!document.getElementById('pond0xClaimSummary')) {
                    console.log(`${lh} - No valid LCD container found. Appending summary box to document.body as fallback...`);
                    createSummaryBoxNow(document.body);
                    summaryBoxCreated = true;
                } else {
                    console.log(`${lh} - Summary box already exists, skipping fallback creation`);
                }
            }
        }, 30000);
        return observer;
    };

    const checkMiningStatus = async () => {
        return new Promise(async (resolve) => {
            if (isMiningRunning) {
                console.log(`${lh} - Status check skipped: isMiningRunning=${isMiningRunning}`);
                resolve(false);
                return;
            }
            console.log(`${lh} - Checking global mining status via background polling...`);
            statusLock = true;

            const pollingStarted = await new Promise((resolvePoll) => {
                chrome.runtime.sendMessage({ type: 'startStatusPolling' }, (response) => {
                    if (chrome.runtime.lastError) {
                        console.error(`${lh} - Failed to send startStatusPolling message: ${chrome.runtime.lastError.message}`);
                        resolvePoll(false);
                        return;
                    }
                    if (!response?.success) {
                        console.error(`${lh} - Failed to start status polling: ${response?.error || 'Unknown error'}`);
                        resolvePoll(false);
                    } else {
                        console.log(`${lh} - Requested status polling via background script, tabId: ${response.tabId}`);
                        resolvePoll(true);
                    }
                });
            });

            if (!pollingStarted) {
                console.warn(`${lh} - Status polling failed to start. Retrying in 5 seconds...`);
                statusLock = false;
                setTimeout(() => checkMiningStatus().then(resolve), 5000);
                resolve(false);
                return;
            }

            let startedMining = false;
            let lastStatus = null;

            const handler = (message, sender, sendResponse) => {
                console.log(`${lh} - Received message from background:`, message);
                if (message.type !== 'miningStatus' || !message.status) {
                    console.warn(`${lh} - Invalid message format:`, message);
                    return;
                }

                const status = message.status;
                if (lastStatus !== status) {
                    console.log(`${lh} - Global mining status changed to "${status}"`);
                    lastStatus = status;
                }
                currentGlobalStatus = status;

                miningStatuses.push({ status, time: getTime() });
                if (miningStatuses.length > 10) miningStatuses.shift();

                const statusSpan = document.getElementById('globalStatus');
                if (statusSpan) statusSpan.textContent = currentGlobalStatus;
                updateClaimSummaryBox();

                if (status === 'Mining: Active' && !isMiningRunning && !startedMining && !isPaused) {
                    startedMining = true;
                    console.log(`${lh} - Global mining active. Starting session and stopping polling...`);
                    startMining().then(() => {
                        chrome.runtime.sendMessage({ type: 'stopStatusPolling' }, (response) => {
                            if (chrome.runtime.lastError) {
                                console.error(`${lh} - Failed to send stopStatusPolling message: ${chrome.runtime.lastError.message}`);
                            } else {
                                console.log(`${lh} - Stopped status polling successfully`);
                            }
                        });
                        chrome.runtime.sendMessage({ type: 'closeStatusTab' }, (response) => {
                            if (chrome.runtime.lastError) {
                                console.error(`${lh} - Failed to send closeStatusTab message: ${chrome.runtime.lastError.message}`);
                            } else {
                                console.log(`${lh} - Status-mini tab closed successfully`);
                            }
                        });
                        chrome.runtime.onMessage.removeListener(handler);
                        statusLock = false;
                        resolve(true);
                    }).catch((error) => {
                        console.error(`${lh} - Error starting mining: ${error.message}`);
                        try {
                            notifyUser('Pond0x Error', `Error starting mining: ${error.message}`);
                        } catch (notifyError) {
                            console.error(`${lh} - Failed to send notification: ${notifyError.message}. Continuing...`);
                        }
                        chrome.runtime.sendMessage({ type: 'closeStatusTab' }, (response) => {
                            if (chrome.runtime.lastError) {
                                console.error(`${lh} - Failed to send closeStatusTab message: ${chrome.runtime.lastError.message}`);
                            } else {
                                console.log(`${lh} - Status-mini tab closed successfully after mining failure`);
                            }
                        });
                        chrome.runtime.onMessage.removeListener(handler);
                        statusLock = false;
                        resolve(false);
                    });
                }
            };

            chrome.runtime.onMessage.addListener(handler);
            console.log(`${lh} - Message event listener added. Waiting for continuous miningStatus messages...`);
        });
    };

    const startMining = async () => {
        if (statusLock) {
            console.log(`${lh} - Start mining skipped: statusLock=${statusLock}`);
            return;
        }
        statusLock = true;

        let mineButtonRetries = 0;
        const maxMineButtonRetries = 4;
        const retryDelay = 2000;

        let mineBtn = searchNodeByContent('button', 'Mine');
        while (!mineBtn && mineButtonRetries < maxMineButtonRetries && isAutoMode) {
            console.log(`${lh} - Mine button not found (attempt ${mineButtonRetries + 1}/${maxMineButtonRetries}). Retrying in ${retryDelay / 1000}s...`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));
            mineBtn = searchNodeByContent('button', 'Mine');
            mineButtonRetries++;
        }

        if (!mineBtn && mineButtonRetries >= maxMineButtonRetries && isAutoMode) {
            console.warn(`${lh} - Mine button not found after ${maxMineButtonRetries} retries in Auto Mode. Reloading page...`);
            notifyUser('Pond0x Warning', `Mine button not found after ${maxMineButtonRetries} retries. Reloading page...`);
            pageReloads++;
            reloadReason = 'Mine Button Not Found (Auto Mode)';
            await GM.setValue('pond0xPageReloads', pageReloads);
            await GM.setValue('pond0xReloadReason', reloadReason);
            window.location.href = 'https://www.pond0x.com/mining';
            statusLock = false;
            return;
        }

        if (!mineBtn && !isAutoMode) {
            console.warn(`${lh} - No Mine button found in Manual Mode. Reloading page...`);
            notifyUser('Pond0x Warning', 'No Mine button found in Manual Mode. Reloading page...');
            pageReloads++;
            reloadReason = 'Mine Button Not Found (Manual Mode)';
            await GM.setValue('pond0xPageReloads', pageReloads);
            await GM.setValue('pond0xReloadReason', reloadReason);
            window.location.href = 'https://www.pond0x.com/mining';
            statusLock = false;
            return;
        }

        if (mineBtn) {
            console.log(`${lh} - Starting mining session...`);
            mineBtn.click();

            let lcdContainer = null;
            let attempts = 0;
            const maxAttempts = 20;
            const retryDelay = 1000;

            while (!lcdContainer && attempts < maxAttempts) {
                console.log(`${lh} - Waiting for LCD container after mine click (attempt ${attempts + 1}/${maxAttempts})...`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
                lcdContainer = document.querySelector('.screenshadow') ||
                              document.querySelector('.bg-\\[\\#414f76\\]') ||
                              document.querySelector('.mining-display') ||
                              document.querySelector('.lcd-container') ||
                              document.querySelector('.mining-section') ||
                              document.querySelector('[class*="mining"]');
                attempts++;
            }

            if (lcdContainer) {
                console.log(`${lh} - LCD container found after ${attempts} attempts`);
                let unclaimed = '';
                const maxWaitAttempts = 300;
                let waitAttempts = 0;

                while (waitAttempts < maxWaitAttempts && !unclaimed) {
                    console.log(`${lh} - Waiting for unclaimed value (attempt ${waitAttempts + 1}/${maxWaitAttempts})...`);
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                    const params = getLCDParams();
                    unclaimed = (params.unclaimed || '').trim().toLowerCase();
                    waitAttempts++;
                }

                const hashrate = parseFloat(getLCDParams().hashrate) || 0;
                const invalidUnclaimedValues = ['100k', '1m', '1.1m'];

                if (hashrate > 0 && unclaimed && !invalidUnclaimedValues.includes(unclaimed)) {
                    console.log(`${lh} - Mining started successfully with hashrate ${hashrate}h/s, unclaimed: ${unclaimed}`);
                    notifyUser('Pond0x Mining', 'Mining started successfully');
                    if (!summaryBoxCreated) {
                        createSummaryBoxNow(lcdContainer);
                        summaryBoxCreated = true;
                    } else {
                        await updateClaimSummaryBox();
                    }
                    if (!autominerManuallyStarted) {
                        autominerManuallyStarted = true;
                        await GM.setValue('pond0xAutominerStarted', true);
                    }
                    window.pond0xO.startTime = getTime();
                } else if (invalidUnclaimedValues.includes(unclaimed)) {
                    if (isErrorStateRestartEnabled) {
                        console.warn(`${lh} - Mining start failed: Invalid unclaimed value ${unclaimed} detected after 2 minutes, reloading page (Error State Restarts enabled)`);
                        notifyUser('Pond0x Warning', `Mining start failed: Invalid unclaimed value ${unclaimed}. Reloading page...`);
                        isMiningRunning = false;
                        await GM.setValue('pond0xIsMiningRunning', false);
                        window.pond0xO.startTime = null;
                        pageReloads++;
                        reloadReason = 'Invalid Unclaimed Value Reload';
                        await GM.setValue('pond0xPageReloads', pageReloads);
                        await GM.setValue('pond0xReloadReason', reloadReason);
                        console.log(`${lh} - Reloading page due to invalid unclaimed value...`);
                        window.location.href = 'https://www.pond0x.com/mining';
                    } else {
                        console.log(`${lh} - Mining started with invalid unclaimed value ${unclaimed}, continuing to accrue rewards (Error State Restarts disabled)`);
                        notifyUser('Pond0x Mining', `Mining started with invalid value ${unclaimed}, continuing...`);
                        isMiningRunning = true;
                        await GM.setValue('pond0xIsMiningRunning', true);
                        if (!summaryBoxCreated) {
                            createSummaryBoxNow(lcdContainer);
                            summaryBoxCreated = true;
                        } else {
                            await updateClaimSummaryBox();
                        }
                        if (!autominerManuallyStarted) {
                            autominerManuallyStarted = true;
                            await GM.setValue('pond0xAutominerStarted', true);
                        }
                        window.pond0xO.startTime = getTime();
                    }
                } else {
                    console.warn(`${lh} - Mining start failed: Hashrate=${hashrate}, Unclaimed=${unclaimed} (timeout after 2 minutes)`);
                    notifyUser('Pond0x Warning', `Mining start failed: Hashrate=${hashrate}, Unclaimed=${unclaimed} (timeout)`);
                    isMiningRunning = false;
                    await GM.setValue('pond0xIsMiningRunning', false);
                    window.pond0xO.startTime = null;
                }
            } else {
                console.warn(`${lh} - LCD container not found after ${maxAttempts} attempts, falling back to observer...`);
                notifyUser('Pond0x Warning', 'LCD container not found after mine click');
                observeLCDContainer();
                isMiningRunning = false;
                await GM.setValue('pond0xIsMiningRunning', false);
                window.pond0xO.startTime = null;
            }
        } else {
            console.warn(`${lh} - No Mine button found to start mining`);
            notifyUser('Pond0x Warning', 'No Mine button found to start mining');
            isMiningRunning = false;
            await GM.setValue('pond0xIsMiningRunning', false);
            window.pond0xO.startTime = null;
        }
        statusLock = false;
    };
const run = async () => {
    if (isRunExecuting) {
        console.log(`${lh} - Run already executing, skipping duplicate call...`);
        return;
    }
    isRunExecuting = true;

    try {
        if (!isAutoMode && !isMiningRunning && !autominerManuallyStarted) {
            console.log(`${lh} - Manual mode inactive, awaiting user start. Skipping run cycle...`);
            runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
            return;
        }

    if (isAutoMode && !isMiningRunning && !autominerManuallyStarted) {
        console.log(`${lh} - Auto mode inactive, awaiting user start via 'Start Auto Mining'. Skipping run cycle...`);
        runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
        return;
    }

    if (isPaused) {
        console.log(`${lh} - Autominer paused. Waiting to resume...`);
        nextRetryTime = null;
        runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
        return;
    }

    console.log(`${lh} - Run cycle state: hashrate=${parseFloat(getLCDParams().hashrate) || 0}h/s, autominerManuallyStarted=${autominerManuallyStarted}, claimCount=${claimCount}, isAutoMode=${isAutoMode}, pageReloads=${pageReloads}, isClaimWaitMode=${isClaimWaitMode}`);

    const isOnline = navigator.onLine;
    if (!isOnline) {
        console.warn(`${lh} - Network disconnected. Attempting to recover...`);
        try {
            notifyUser('Pond0x Warning', 'Network disconnected. Waiting for reconnection...');
        } catch (error) {
            console.error(`${lh} - Failed to send notification: ${error.message}. Continuing...`);
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
        if (!navigator.onLine) {
            console.error(`${lh} - Network still disconnected. Reloading page to recover...`);
            pageReloads++;
            reloadReason = 'Network Disconnection Recovery';
            try {
                await GM.setValue('pond0xPageReloads', pageReloads);
                await GM.setValue('pond0xReloadReason', reloadReason);
            } catch (error) {
                console.error(`${lh} - Failed to set reload values:`, error.message);
            }
            window.location.href = 'https://www.pond0x.com/mining';
            return;
        } else {
            console.log(`${lh} - Network reconnected. Continuing...`);
        }
    }

    let lcdContainer = document.querySelector('.screenshadow') ||
                      document.querySelector('.bg-\\[\\#414f76\\]') ||
                      document.querySelector('.mining-display') ||
                      document.querySelector('.lcd-container') ||
                      document.querySelector('.mining-section') ||
                      document.querySelector('[class*="mining"]');
    const params = lcdContainer ? getLCDParams() : { hashrate: '0', unclaimed: '' };
    let hashrate = parseFloat(params.hashrate) || 0;
    const currentUnclaimed = (params.unclaimed || '').trim().toLowerCase();
    const runTime = getTime();
    const timeSinceStart = window.pond0xO.startTime ? (runTime - window.pond0xO.startTime) : 0;

    if (hashrate === 0 && lcdContainer && isMiningRunning) {
        console.warn(`${lh} - Hash rate dropped to 0 unexpectedly. Retrying to confirm...`);
        let retryAttempts = 0;
        const maxRetryAttempts = 3;
        const retryDelay = 2000;

        while (retryAttempts < maxRetryAttempts) {
            await new Promise(resolve => setTimeout(resolve, retryDelay));
            const retryParams = lcdContainer ? getLCDParams() : { hashrate: '0', unclaimed: '' };
            hashrate = parseFloat(retryParams.hashrate) || 0;
            console.log(`${lh} - Retry ${retryAttempts + 1}/${maxRetryAttempts}: Hashrate=${hashrate}h/s`);
            if (hashrate > 0) {
                console.log(`${lh} - Hash rate recovered to ${hashrate}h/s. Continuing...`);
                break;
            }
            retryAttempts++;
        }

        if (hashrate === 0) {
            console.warn(`${lh} - Hash rate confirmed as 0 after ${maxRetryAttempts} retries. Proceeding with claim logic...`);
        }
    }

    if (hashrate > 0) {
        if (!window.pond0xO.startTime) {
            window.pond0xO.startTime = runTime;
        }
        lastStatusMessage = `Status: Unclaimed: "${currentUnclaimed}", Hashrate: ${hashrate}h/s, Time: ${timeSinceStart}s`;
        console.log(`${lh} - ${lastStatusMessage}`);
        try {
            notifyUser('Pond0x Mining Status', lastStatusMessage);
        } catch (error) {
            console.error(`${lh} - Failed to send notification: ${error.message}. Continuing...`);
        }
        if (!summaryBoxCreated && lcdContainer) {
            createSummaryBoxNow(lcdContainer);
            summaryBoxCreated = true;
        } else if (summaryBoxCreated) {
            await updateClaimSummaryBox();
        }
        isMiningRunning = true;
        try {
            await GM.setValue('pond0xIsMiningRunning', true);
        } catch (error) {
            console.error(`${lh} - Failed to set isMiningRunning:`, error.message);
        }
    }

    if (isAutoMode && !isMiningRunning && autominerManuallyStarted) {
        console.log(`${lh} - Bypassing status check for testing, assuming active...`);
        isMiningActive = true;
        await startMining();
    } else if (!isAutoMode && !hashrate && !isMiningRunning && autominerManuallyStarted) {
        await startMining();
    }

    let currentUnclaimedNum = 0;
    if (lcdContainer && currentUnclaimed && !['100k', '1m', '1.1m'].includes(currentUnclaimed)) {
        currentUnclaimedNum = parseFloat(currentUnclaimed.replace('m', '')) || 0;
        if (currentUnclaimed.includes('m')) {
            currentUnclaimedNum *= 1000000;
        } else if (currentUnclaimed.includes('b')) {
            currentUnclaimedNum *= 1000000000;
        }
    }

    const buttons = {
        stop: currentUnclaimedNum < 100000000 ? searchNodeByContent('button', 'STOP ANYWAYS') : null,
        claim: searchNodeByContent('button', 'STOP & Claim')
    };

    const effectiveClaimIntervalSeconds = Math.min(claimIntervalMinutes * 60, 150 * 60);
    console.log(`${lh} - Effective claim interval: ${effectiveClaimIntervalSeconds / 60} minutes (user-set: ${claimIntervalMinutes} minutes)`);

    if (lcdContainer && hashrate === 0 && (buttons.stop || buttons.claim)) {
        console.log(`${lh} - Hash rate is 0, initiating claim and reload...`);
        const claimButton = buttons.claim || buttons.stop;
        if (claimButton) {
            isClaiming = true;
            lastClaimTime = getTime();
            try {
                await GM.setValue('pond0xLastClaimTime', lastClaimTime);
                claimTimes.push(lastClaimTime);
                await GM.setValue('pond0xClaimTimes', JSON.stringify(claimTimes));
                await GM.setValue('pond0xLastClaimTime', lastClaimTime);

                historicalClaims.push({ date: lastClaimTime, amount: currentUnclaimedNum });
                await updateDailyClaims(lastClaimTime, currentUnclaimedNum);
                await GM.setValue('pond0xHistoricalClaims', JSON.stringify(historicalClaims.slice(-100)));
            } catch (error) {
                console.error(`${lh} - Failed to set claim-related storage:`, error.message);
            }

            console.log(`${lh} - Clicking ${claimButton.textContent} due to hash rate 0...`);
                const clickSuccess = await executeClaimWithVerification(claimButton, claimButton.textContent);
                if (!clickSuccess) {
                    console.warn(`${lh} - Failed to click claim button, skipping this cycle`);
                    runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
                    return;
                }
                await new Promise(resolve => setTimeout(resolve, getTimeMS(6)));

            claimCount++;
            totalClaimed += currentUnclaimedNum;
            lastClaimValue = currentUnclaimedNum;
            console.log(`${lh} - Updated totalClaimed to ${totalClaimed}, lastClaimValue to ${lastClaimValue}`);
            try {
                await GM.setValue('pond0xClaimCount', claimCount);
                await GM.setValue('pond0xTotalClaimed', totalClaimed);
                await GM.setValue('pond0xLastClaim', lastClaimValue);
            } catch (error) {
                console.error(`${lh} - Failed to set claim count/values:`, error.message);
            }

            isMiningRunning = false;
            try {
                await GM.setValue('pond0xIsMiningRunning', false);
            } catch (error) {
                console.error(`${lh} - Failed to set isMiningRunning:`, error.message);
            }
            window.pond0xO.startTime = null;

            if (isClaimWaitMode) {
                console.log(`${lh} - Claim + Wait mode active in ${isAutoMode ? 'auto' : 'manual'} mode, pausing for ${claimWaitPeriodMinutes} minutes...`);
                try {
                    notifyUser('Pond0x Claim', `Claim successful: ${formatClaimValue(currentUnclaimedNum)} tokens. Waiting ${claimWaitPeriodMinutes} minutes...`);
                } catch (error) {
                    console.error(`${lh} - Failed to send claim notification:`, error.message);
                }
                isPaused = true;
                try {
                    await GM.setValue('pond0xMinerIsPaused', true);
                } catch (error) {
                    console.error(`${lh} - Failed to set isPaused:`, error.message);
                }
                const pauseResumeBtn = document.getElementById('pauseResumeBtn');
                if (pauseResumeBtn) {
                    pauseResumeBtn.textContent = 'Resume';
                    pauseResumeBtn.style.background = '#28a745';
                    pauseResumeBtn.style.color = 'white';
                }
                const waitUntil = getTime() + (claimWaitPeriodMinutes * 60);
                try {
                    await GM.setValue('pond0xWaitUntil', waitUntil);
                } catch (error) {
                    console.error(`${lh} - Failed to set waitUntil:`, error.message);
                }
                await new Promise(resolve => setTimeout(resolve, getTimeMS(claimWaitPeriodMinutes * 60)));
                isPaused = false;
                try {
                    await GM.setValue('pond0xMinerIsPaused', false);
                    await GM.setValue('pond0xWaitUntil', 0);
                } catch (error) {
                    console.error(`${lh} - Failed to clear pause/waitUntil:`, error.message);
                }
                if (pauseResumeBtn) {
                    pauseResumeBtn.textContent = 'Pause';
                    pauseResumeBtn.style.background = '#ffc107';
                    pauseResumeBtn.style.color = 'black';
                }
                if (isAutoMode) {
                    autominerManuallyStarted = true;
                    try {
                        await GM.setValue('pond0xAutominerStarted', true);
                    } catch (error) {
                        console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
                    }
                }
            }

            if (!isAutoMode) {
                console.log(`${lh} - Manual mode: Claim completed, stopping autominer and preparing for user interaction...`);
                if (runTimeout) {
                    clearTimeout(runTimeout);
                    runTimeout = null;
                }
                autominerManuallyStarted = false;
                try {
                    await GM.setValue('pond0xAutominerStarted', false);
                } catch (error) {
                    console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
                }
                const toggleMiningBtn = document.getElementById('toggleMiningBtn');
                if (toggleMiningBtn) {
                    toggleMiningBtn.textContent = 'Start Manual Mining';
                    toggleMiningBtn.style.background = '#28a745';
                }
                try {
                    notifyUser('Pond0x Claim', `Claim successful in manual mode: ${formatClaimValue(currentUnclaimedNum)} tokens${isClaimWaitMode ? ` after ${claimWaitPeriodMinutes}-minute wait` : '. Awaiting user action...'}`);
                } catch (error) {
                    console.error(`${lh} - Failed to send claim notification:`, error.message);
                }
            } else if (!isClaimWaitMode) {
                try {
                    notifyUser('Pond0x Claim', `Claim successful due to hash rate 0: ${formatClaimValue(currentUnclaimedNum)} tokens`);
                } catch (error) {
                    console.error(`${lh} - Failed to send claim notification:`, error.message);
                }
                autominerManuallyStarted = true;
                try {
                    await GM.setValue('pond0xAutominerStarted', true);
                } catch (error) {
                    console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
                }
            }

            lastStatusCheckTime = 0;
            pageReloads++;
            reloadReason = isClaimWaitMode ? `Claim + Wait ${claimWaitPeriodMinutes} Mins` : 'Hash Rate Zero Claim';
            try {
                await GM.setValue('pond0xPageReloads', pageReloads);
                await GM.setValue('pond0xReloadReason', reloadReason);
            } catch (error) {
                console.error(`${lh} - Failed to set reload values:`, error.message);
            }
            console.log(`${lh} - Updated reload reason to ${reloadReason} after hash rate zero claim`);

            console.log(`${lh} - Reloading page to start next session...`);
            window.location.href = 'https://www.pond0x.com/mining';
            return;
        } else {
            console.warn(`${lh} - No claim button found despite hash rate 0`);
            try {
                notifyUser('Pond0x Warning', 'No claim button found despite hash rate 0');
            } catch (error) {
                console.error(`${lh} - Failed to send notification:`, error.message);
            }
        }
    }

    if (lcdContainer && ['100k', '1m', '1.1m'].includes(currentUnclaimed)) {
        if (isErrorStateRestartEnabled) {
            console.warn(`${lh} - Detected invalid unclaimed value ${currentUnclaimed}, reloading page (Error State Restarts enabled)...`);
            pageReloads++;
            reloadReason = 'Invalid Unclaimed Value Reload';
            try {
                await GM.setValue('pond0xPageReloads', pageReloads);
                await GM.setValue('pond0xReloadReason', reloadReason);
            } catch (error) {
                console.error(`${lh} - Failed to set reload values:`, error.message);
            }
            window.location.href = 'https://www.pond0x.com/mining';
            return;
        } else {
            console.log(`${lh} - Detected invalid unclaimed value ${currentUnclaimed}, continuing to accrue rewards (Error State Restarts disabled)`);
            lastStatusMessage = `Status: Unclaimed: "${currentUnclaimed}", Hashrate: ${hashrate}h/s, Time: ${timeSinceStart}s (Error State Ignored)`;
            if (!summaryBoxCreated && lcdContainer) {
                createSummaryBoxNow(lcdContainer);
                summaryBoxCreated = true;
            } else if (summaryBoxCreated) {
                await updateClaimSummaryBox();
            }
            isMiningRunning = true;
            try {
                await GM.setValue('pond0xIsMiningRunning', true);
            } catch (error) {
                console.error(`${lh} - Failed to set isMiningRunning:`, error.message);
            }
        }
    }

    if (lcdContainer && hashrate > 0 && (buttons.stop || buttons.claim)) {
        const freshSettings = await getFreshSmartClaimSettings();
        const freshEffectiveClaimInterval = Math.min(freshSettings.intervalMinutes * 60, 150 * 60);
        const shouldClaim =
            timeSinceStart > freshEffectiveClaimInterval ||
            (freshSettings.enabled && currentUnclaimedNum >= freshSettings.threshold);

        if (freshSettings.enabled) {
            console.log(`${lh} - Smart Claim Check: Current=${formatClaimValue(currentUnclaimedNum)}, Threshold=${formatClaimValue(freshSettings.threshold)}, Met=${currentUnclaimedNum >= freshSettings.threshold}`);
        }
        console.log(`${lh} - Time Check: Elapsed=${Math.floor(timeSinceStart/60)}min, Threshold=${Math.floor(freshEffectiveClaimInterval/60)}min, Met=${timeSinceStart > freshEffectiveClaimInterval}`);

        if (shouldClaim) {
            const claimButton = buttons.claim || buttons.stop;
            if (claimButton) {
                if (currentUnclaimedNum <= 0) {
                    console.warn(`${lh} - Skipping claim due to invalid unclaimed amount: ${currentUnclaimed}`);
                    runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
                    return;
                }
                isClaiming = true;
                lastClaimTime = getTime();
                try {
                    await GM.setValue('pond0xLastClaimTime', lastClaimTime);
                    claimTimes.push(lastClaimTime);
                    await GM.setValue('pond0xClaimTimes', JSON.stringify(claimTimes));
                    await GM.setValue('pond0xLastClaimTime', lastClaimTime);

                    historicalClaims.push({ date: lastClaimTime, amount: currentUnclaimedNum });
                    await updateDailyClaims(lastClaimTime, currentUnclaimedNum);
                    await GM.setValue('pond0xHistoricalClaims', JSON.stringify(historicalClaims.slice(-100)));
                } catch (error) {
                    console.error(`${lh} - Failed to set claim-related storage:`, error.message);
                }

                const claimReason = timeSinceStart > freshEffectiveClaimInterval
                    ? `time threshold (${freshEffectiveClaimInterval / 60} minutes)`
                    : `smart claim threshold (${formatClaimValue(freshSettings.threshold)})`;
                console.log(`${lh} - Clicking ${claimButton.textContent} due to ${claimReason}...`);
                const clickSuccess = await executeClaimWithVerification(claimButton, claimButton.textContent);
                if (!clickSuccess) {
                    console.warn(`${lh} - Failed to click claim button, skipping this cycle`);
                    runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
                    return;
                }

                claimCount++;
                totalClaimed += currentUnclaimedNum;
                lastClaimValue = currentUnclaimedNum;
                console.log(`${lh} - Updated totalClaimed to ${totalClaimed}, lastClaimValue to ${lastClaimValue}`);
                try {
                    await GM.setValue('pond0xClaimCount', claimCount);
                    await GM.setValue('pond0xTotalClaimed', totalClaimed);
                    await GM.setValue('pond0xLastClaim', lastClaimValue);
                } catch (error) {
                    console.error(`${lh} - Failed to set claim count/values:`, error.message);
                }

                isMiningRunning = false;
                try {
                    await GM.setValue('pond0xIsMiningRunning', false);
                } catch (error) {
                    console.error(`${lh} - Failed to set isMiningRunning:`, error.message);
                }
                window.pond0xO.startTime = null;

                if (isClaimWaitMode) {
                    console.log(`${lh} - Claim + Wait mode active in ${isAutoMode ? 'auto' : 'manual'} mode, pausing for ${claimWaitPeriodMinutes} minutes...`);
                    try {
                        notifyUser('Pond0x Claim', `Claim successful: ${formatClaimValue(currentUnclaimedNum)} tokens. Waiting ${claimWaitPeriodMinutes} minutes...`);
                    } catch (error) {
                        console.error(`${lh} - Failed to send claim notification:`, error.message);
                    }
                    isPaused = true;
                    try {
                        await GM.setValue('pond0xMinerIsPaused', true);
                    } catch (error) {
                        console.error(`${lh} - Failed to set isPaused:`, error.message);
                    }
                    const pauseResumeBtn = document.getElementById('pauseResumeBtn');
                    if (pauseResumeBtn) {
                        pauseResumeBtn.textContent = 'Resume';
                        pauseResumeBtn.style.background = '#28a745';
                        pauseResumeBtn.style.color = 'white';
                    }
                    const waitUntil = getTime() + (claimWaitPeriodMinutes * 60);
                    try {
                        await GM.setValue('pond0xWaitUntil', waitUntil);
                    } catch (error) {
                        console.error(`${lh} - Failed to set waitUntil:`, error.message);
                    }
                    await new Promise(resolve => setTimeout(resolve, getTimeMS(claimWaitPeriodMinutes * 60)));
                    isPaused = false;
                    try {
                        await GM.setValue('pond0xMinerIsPaused', false);
                        await GM.setValue('pond0xWaitUntil', 0);
                    } catch (error) {
                        console.error(`${lh} - Failed to clear pause/waitUntil:`, error.message);
                    }
                    if (pauseResumeBtn) {
                        pauseResumeBtn.textContent = 'Pause';
                        pauseResumeBtn.style.background = '#ffc107';
                        pauseResumeBtn.style.color = 'black';
                    }
                    if (isAutoMode) {
                        autominerManuallyStarted = true;
                        try {
                            await GM.setValue('pond0xAutominerStarted', true);
                        } catch (error) {
                            console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
                        }
                    }
                }

                if (!isAutoMode) {
                    console.log(`${lh} - Manual mode: Claim completed, stopping autominer and preparing for user interaction...`);
                    if (runTimeout) {
                        clearTimeout(runTimeout);
                        runTimeout = null;
                    }
                    autominerManuallyStarted = false;
                    try {
                        await GM.setValue('pond0xAutominerStarted', false);
                    } catch (error) {
                        console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
                    }
                    const toggleMiningBtn = document.getElementById('toggleMiningBtn');
                    if (toggleMiningBtn) {
                        toggleMiningBtn.textContent = 'Start Manual Mining';
                        toggleMiningBtn.style.background = '#28a745';
                    }
                    try {
                        notifyUser('Pond0x Claim', `Claim successful in manual mode: ${formatClaimValue(currentUnclaimedNum)} tokens${isClaimWaitMode ? ` after ${claimWaitPeriodMinutes}-minute wait` : '. Awaiting user action...'}`);
                    } catch (error) {
                        console.error(`${lh} - Failed to send claim notification:`, error.message);
                    }
                } else if (!isClaimWaitMode) {
                    try {
                        notifyUser('Pond0x Claim', `Claim successful: ${formatClaimValue(currentUnclaimedNum)} tokens`);
                    } catch (error) {
                        console.error(`${lh} - Failed to send claim notification:`, error.message);
                    }
                    autominerManuallyStarted = true;
                    try {
                        await GM.setValue('pond0xAutominerStarted', true);
                    } catch (error) {
                        console.error(`${lh} - Failed to set autominerManuallyStarted:`, error.message);
                    }
                }

                lastStatusCheckTime = 0;
                pageReloads++;
                reloadReason = isClaimWaitMode ? `Claim + Wait ${claimWaitPeriodMinutes} Mins` : (timeSinceStart > freshEffectiveClaimInterval ? 'Time Threshold Claim' : 'Smart Claim');
                try {
                    await GM.setValue('pond0xPageReloads', pageReloads);
                    await GM.setValue('pond0xReloadReason', reloadReason);
                } catch (error) {
                    console.error(`${lh} - Failed to set reload values:`, error.message);
                }
                console.log(`${lh} - Updated reload reason to ${reloadReason} after claim`);

                console.log(`${lh} - Reloading page after claim...`);
                window.location.href = 'https://www.pond0x.com/mining';
                return;
            } else {
                console.warn(`${lh} - No claim button found for smart/time-based claim`);
                try {
                    notifyUser('Pond0x Warning', 'No claim button found for smart/time-based claim');
                } catch (error) {
                    console.error(`${lh} - Failed to send notification:`, error.message);
                }
            }
        }
    }

        runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
    } catch (error) {
        console.error(`${lh} - Error in run function:`, error.message);
        runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
    } finally {
        isRunExecuting = false;
    }
};
const resetDailyStats = async () => {
        claimCount = 0;
        totalClaimed = 0;
        pageReloads = 0;
        lastClaimValue = 0;
        await GM.setValue('pond0xClaimCount', 0);
        await GM.setValue('pond0xTotalClaimed', 0);
        await GM.setValue('pond0xPageReloads', 0);
        await GM.setValue('pond0xLastClaim', 0);
        const todayMidnight = new Date().setHours(0, 0, 0, 0);
        await GM.setValue('pond0xLastResetDate', new Date(todayMidnight).toISOString());
        await GM.setValue('pond0xClaimTimes', JSON.stringify([]));
        console.log(`${lh} - Manual reset of claimCount, totalClaimed, pageReloads, and lastClaimValue to 0`);
        await updateClaimSummaryBox();
    };

    const calculateAverageClaimTime = () => {
        if (claimTimes.length < 2) return 0;
        const timeDifferences = [];
        for (let i = 1; i < claimTimes.length; i++) {
            const diff = (claimTimes[i] - claimTimes[i - 1]) / 60;
            timeDifferences.push(diff);
        }
        const average = timeDifferences.reduce((sum, val) => sum + val, 0) / timeDifferences.length;
        return Math.round(average * 100) / 100;
    };

    const getPreviousThreeDaysClaims = () => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const fourDaysAgo = new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000);
        const filteredClaims = {};
        Object.keys(dailyClaims).forEach(date => {
            const claimDate = new Date(date);
            if (claimDate >= fourDaysAgo) {
                filteredClaims[date] = dailyClaims[date];
            }
        });
        const sortedDays = Object.entries(filteredClaims)
            .sort((a, b) => new Date(b[0]) - new Date(a[0]))
            .map(([date, total]) => `${date}: ${formatClaimValue(total)}`)
            .join('<br>');
        return sortedDays || 'No claims in the last 4 days';
    };

    const calculateAverageClaimAmount = () => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const fourDaysAgo = new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000);
        const recentClaims = historicalClaims.filter(claim => new Date(claim.date * 1000) >= fourDaysAgo);
        const avgClaimAmount = recentClaims.length > 0 ? recentClaims.reduce((sum, claim) => sum + claim.amount, 0) / recentClaims.length : 0;
        return avgClaimAmount;
    };

    const formatClaimValue = (value) => {
        if (value >= 1000000000) {
            return `${(value / 1000000000).toFixed(2)}B`;
        } else if (value >= 1000000) {
            return `${(value / 1000000).toFixed(2)}M`;
        } else {
            return `${value.toFixed(2)}`;
        }
    };

    const updateDailyClaims = async (claimTime, amount) => {
        const claimDate = new Date(claimTime * 1000).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        dailyClaims[claimDate] = (dailyClaims[claimDate] || 0) + amount;
        await GM.setValue('pond0xDailyClaims', JSON.stringify(dailyClaims));
    };

    const createClaimSummaryBox = async () => {
        if (document.getElementById('pond0xClaimSummary') || summaryBoxCreated) {
            console.log(`${lh} - Summary box already created or in progress, skipping...`);
            return;
        }

        console.log(`${lh} - Attempting to create claim summary box...`);

        let lcdContainer = document.querySelector('.screenshadow') ||
                          document.querySelector('.bg-\\[\\#414f76\\]') ||
                          document.querySelector('.mining-display') ||
                          document.querySelector('.lcd-container') ||
                          document.querySelector('.mining-section') ||
                          document.querySelector('[class*="mining"]');
        let attempts = 0;
        const maxAttempts = 5;
        const retryDelay = 1000;

        while (!lcdContainer && attempts < maxAttempts) {
            console.log(`${lh} - LCD container not found (attempt ${attempts + 1}/${maxAttempts}). Retrying...`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));
            lcdContainer = document.querySelector('.screenshadow') ||
                          document.querySelector('.bg-\\[\\#414f76\\]') ||
                          document.querySelector('.mining-display') ||
                          document.querySelector('.lcd-container') ||
                          document.querySelector('.mining-section') ||
                          document.querySelector('[class*="mining"]');
            attempts++;
        }

        if (!lcdContainer) {
            console.log(`${lh} - LCD container not found after ${maxAttempts} attempts. Starting observer and falling back to document.body...`);
            createSummaryBoxNow(document.body);
            summaryBoxCreated = true;
            const observer = observeLCDContainer();
            return;
        }

        const isVisible = lcdContainer.offsetWidth > 0 && lcdContainer.offsetHeight > 0;
        console.log(`${lh} - LCD container found: ${lcdContainer.tagName}.${Array.from(lcdContainer.classList).join('.')}, Visible: ${isVisible}, Dimensions: ${lcdContainer.offsetWidth}x${lcdContainer.offsetHeight}`);
        
        if (!isVisible) {
            console.log(`${lh} - LCD container is not visible, starting observer and falling back to document.body...`);
            createSummaryBoxNow(document.body);
            summaryBoxCreated = true;
            const observer = observeLCDContainer();
            return;
        }

        createSummaryBoxNow(lcdContainer);
        summaryBoxCreated = true;
    };

    const createControlPanel = async () => {
    if (document.getElementById('pond0xControlPanel')) {
        console.log(`${lh} - Control panel already exists, skipping creation...`);
        isControlPanelReady = true;
        return;
    }

    console.log(`${lh} - Creating control panel...`);

    try {
        await waitForPageLoad();

        const controlPanel = document.createElement('div');
        controlPanel.id = 'pond0xControlPanel';
        controlPanel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
            border: 2px solid #000000;
            border-radius: 10px;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
            padding: 10px;
            z-index: 10000;
            cursor: move;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        `;

        const formatTime = (timestamp) => {
            if (!timestamp) return 'N/A';
            const date = new Date(timestamp * 1000);
            return date.toLocaleTimeString('en-US', { hour12: false });
        };

        controlPanel.innerHTML = `
            <div style="font-weight: bold; background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; position: relative;">
                    <span style="margin-right: 5px;">Mode:</span>
                    <input type="checkbox" id="autoToggle" ${isAutoMode ? 'checked' : ''} style="display: none;">
                    <span id="toggleLabel" style="background: ${isAutoMode ? '#28a745' : '#dc3545'}; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px; cursor: pointer; position: relative;">
                        ${isAutoMode ? 'Auto' : 'Manual'}
                    </span>
                </div>
                <span style="position: absolute; left: 50%; transform: translateX(-50%);">Control Panel</span>
                <div style="visibility: hidden; display: flex; align-items: center;">
                    <span style="margin-right: 5px;">Mode:</span>
                    <span style="padding: 3px 8px; border-radius: 3px; font-size: 12px;">${isAutoMode ? 'Auto' : 'Manual'}</span>
                </div>
            </div>
            <button id="toggleMiningBtn" style="margin-right: 5px; background: ${isMiningRunning ? '#dc3545' : '#28a745'}; color: white; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px;">
                ${isMiningRunning ? (isAutoMode ? 'Stop Auto Mining' : 'Stop Manual Mining') : (isAutoMode ? 'Start Auto Mining' : 'Start Manual Mining')}
            </button>
            <button id="claimAnywayBtn" style="margin-right: 5px; background: #dc3545; color: white; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Claim Anyway</button>
            <button id="pauseResumeBtn" style="margin-right: 5px; background: ${isPaused ? '#28a745' : '#ffc107'}; color: ${isPaused ? 'white' : 'black'}; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px;">${isPaused ? 'Resume' : 'Pause'}</button>
            <button id="claimWaitBtn" style="background: ${isClaimWaitMode ? '#28a745' : '#17a2b8'}; color: white; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px; position: relative;">
                ${isClaimWaitMode ? 'Disable Claim + Wait' : 'Enable Claim + Wait'}
            </button>
            <div style="background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px; margin-top: 5px; font-size: 11px;">
                <strong>Global Mining Status:</strong> <span id="globalStatus">${currentGlobalStatus}</span><br>
                <strong>Next Retry:</strong> <span id="nextRetry">${formatTime(nextRetryTime)}</span>
            </div>
            <div style="margin-top: 5px; background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px;">
                <strong style="cursor: pointer;" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent.replace(/.$/, this.nextElementSibling.style.display === 'none' ? '▼' : '▲');">
                    Settings ▼
                </strong>
                <div style="display: block;">
                    <div style="margin-top: 5px;">
                        <label id="claimWaitPeriodLabel" for="claimWaitPeriodInput" style="font-size: 12px;">Claim + Wait Period (min):</label>
                        <input id="claimWaitPeriodInput" type="number" min="1" max="60" value="${claimWaitPeriodMinutes}" style="width: 50px; font-size: 12px; margin-left: 5px; background: linear-gradient(to bottom, #4a1d7d, #8a2be2); color: #ffffff; border: 1px solid #ffffff; border-radius: 5px; padding: 2px 5px;">
                    </div>
                    <div style="margin-top: 5px;">
                        <label id="claimIntervalLabel" for="claimIntervalInput" style="font-size: 12px;">Claim Interval (min):</label>
                        <input id="claimIntervalInput" type="number" min="5" max="240" value="${claimIntervalMinutes}" style="width: 50px; font-size: 12px; margin-left: 5px; background: linear-gradient(to bottom, #4a1d7d, #8a2be2); color: #ffffff; border: 1px solid #ffffff; border-radius: 5px; padding: 2px 5px;">
                    </div>
                    <div style="margin-top: 5px; display: flex; align-items: center;">
                        <label id="smartClaimThresholdLabel" for="smartClaimThresholdInput" style="font-size: 12px;">Smart Claim (<span id="smartClaimUnitLabel">${smartClaimUnit}</span>):</label>
                        <input id="smartClaimThresholdInput" type="number" min="${smartClaimUnit === 'Million' ? 200 : 0.2}" value="${smartClaimUnit === 'Million' ? smartClaimThreshold / 1000000 : smartClaimThreshold / 1000000000}" style="width: 50px; font-size: 12px; margin-left: 5px; background: linear-gradient(to bottom, #4a1d7d, #8a2be2); color: #ffffff; border: 1px solid #ffffff; border-radius: 5px; padding: 2px 5px;">
                        <select id="smartClaimUnitSelect" style="font-size: 12px; margin-left: 5px; background: linear-gradient(to bottom, #4a1d7d, #8a2be2); color: #ffffff; border: 1px solid #ffffff; border-radius: 5px; padding: 2px 5px;">
                            <option value="Million" ${smartClaimUnit === 'Million' ? 'selected' : ''}>Million</option>
                            <option value="Billion" ${smartClaimUnit === 'Billion' ? 'selected' : ''}>Billion</option>
                        </select>
                        <input type="checkbox" id="smartClaimToggle" ${isSmartClaimEnabled ? 'checked' : ''} style="display: none;">
                        <span id="smartClaimToggleLabel" style="background: ${isSmartClaimEnabled ? '#28a745' : '#dc3545'}; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px; cursor: pointer; margin-left: 5px;">
                            ${isSmartClaimEnabled ? 'On' : 'Off'}
                        </span>
                    </div>
                    <div style="margin-top: 5px; display: flex; align-items: center;">
                        <label id="errorStateRestartLabel" for="errorStateRestartToggle" style="font-size: 12px;">Error State Restarts:</label>
                        <input type="checkbox" id="errorStateRestartToggle" ${isErrorStateRestartEnabled ? 'checked' : ''} style="display: none;">
                        <span id="errorStateRestartToggleLabel" style="background: ${isErrorStateRestartEnabled ? '#28a745' : '#dc3545'}; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px; cursor: pointer; margin-left: 5px;">
                            ${isErrorStateRestartEnabled ? 'On' : 'Off'}
                        </span>
                    </div>
                </div>
            </div>
            <div style="margin-top: 5px;">
                <button id="exportHistoryBtn" style="background: #6c757d; color: white; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Export History</button>
            </div>
        `;

        document.body.appendChild(controlPanel);

        const tooltipBox = document.createElement('div');
        tooltipBox.id = 'tooltipBox';
        tooltipBox.style.display = 'none';
        document.body.appendChild(tooltipBox);

        const style = document.createElement('style');
        style.textContent = `
            #tooltipBox {
                display: none;
                opacity: 0;
                transition: opacity 0.3s ease;
                position: absolute;
                background: #333;
                color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 11px;
                max-width: 200px;
                max-height: 100px;
                overflow-y: auto;
                white-space: pre-wrap;
                overflow-wrap: break-word;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                z-index: 10001;
            }
            #tooltipBox.visible {
                display: block;
                opacity: 1;
            }
        `;
        document.head.appendChild(style);

        let isDragging = false, currentX, currentY;
        controlPanel.onmousedown = (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.id !== 'toggleLabel' && e.target.id !== 'smartClaimToggleLabel' && e.target.id !== 'errorStateRestartToggleLabel') {
                isDragging = true;
                currentX = e.clientX - parseInt(controlPanel.style.right);
                currentY = e.clientY - parseInt(controlPanel.style.top);
            }
        };
        document.onmousemove = (e) => {
            if (isDragging) {
                controlPanel.style.right = (window.innerWidth - e.clientX - controlPanel.offsetWidth) + 'px';
                controlPanel.style.top = (e.clientY - currentY) + 'px';
            }
        };
        document.onmouseup = () => { isDragging = false; };

        const toggleMiningBtn = document.getElementById('toggleMiningBtn');
        toggleMiningBtn.addEventListener('click', async () => {
            try {
                if (isMiningRunning) {
                    const stopBtn = searchNodeByContent('button', 'STOP ANYWAYS');
                    if (stopBtn) stopBtn.click();
                    isMiningRunning = false;
                    autominerManuallyStarted = false;
                    await GM.setValue('pond0xIsMiningRunning', false);
                    await GM.setValue('pond0xAutominerStarted', false);
                    notifyUser('Pond0x Mining', `Mining stopped ${isAutoMode ? 'automatically' : 'manually'}`);
                    toggleMiningBtn.textContent = isAutoMode ? 'Start Auto Mining' : 'Start Manual Mining';
                    toggleMiningBtn.style.background = '#28a745';
                    if (runTimeout) {
                        clearTimeout(runTimeout);
                        runTimeout = null;
                    }
                } else if (!isPaused) {
                    autominerManuallyStarted = true;
                    await GM.setValue('pond0xAutominerStarted', true);
                    await startMining();
                    if (isMiningRunning) {
                        toggleMiningBtn.textContent = isAutoMode ? 'Stop Auto Mining' : 'Stop Manual Mining';
                        toggleMiningBtn.style.background = '#dc3545';
                        if (!isAutoMode) {
                            runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
                        }
                    }
                }
                await updateClaimSummaryBox();
            } catch (error) {
                console.error(`${lh} - Failed to toggle mining:`, error.message);
                notifyUser('Pond0x Error', `Failed to toggle mining: ${error.message}`);
            }
        });

        document.getElementById('claimAnywayBtn').addEventListener('click', async () => {
    try {
        // Wait for the button to be present and interactable
        let attempts = 0;
        const maxAttempts = 5;
        let claimBtn = null;
        while (attempts < maxAttempts) {
            claimBtn = searchNodeByContent('button', 'STOP & Claim', true);
            if (claimBtn && claimBtn.offsetParent !== null && !claimBtn.disabled) {
                break;
            }
            console.log(`${lh} - Claim button not found or not interactable, retrying (${attempts + 1}/${maxAttempts})...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            attempts++;
        }

        if (claimBtn) {
            // Store pre-click claim value for validation
            const preClaimValue = lastClaimValue;
            // Dispatch a full click event
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            claimBtn.dispatchEvent(clickEvent);
            console.log(`${lh} - Attempted to click 'STOP & Claim' button`);

            // Wait briefly and check if claim occurred
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (lastClaimValue !== preClaimValue) {
                notifyUser('Pond0x Claim', 'Claim triggered manually');
                console.log(`${lh} - Claim successful, lastClaimValue updated from ${preClaimValue} to ${lastClaimValue}`);
            } else {
                notifyUser('Pond0x Warning', 'Claim button clicked but no claim occurred');
                console.log(`${lh} - Claim button clicked but lastClaimValue unchanged`);
            }
        } else {
            notifyUser('Pond0x Warning', 'No claim button found for Claim Anyway');
            console.log(`${lh} - No interactable 'STOP & Claim' button found after ${maxAttempts} attempts`);
        }
    } catch (error) {
        console.error(`${lh} - Failed to trigger manual claim:`, error.message);
        notifyUser('Pond0x Error', `Failed to trigger manual claim: ${error.message}`);
    }
});

        document.getElementById('pauseResumeBtn').addEventListener('click', async () => {
            try {
                isPaused = !isPaused;
                await GM.setValue('pond0xMinerIsPaused', isPaused);
                document.getElementById('pauseResumeBtn').textContent = isPaused ? 'Resume' : 'Pause';
                document.getElementById('pauseResumeBtn').style.background = isPaused ? '#28a745' : '#ffc107';
                document.getElementById('pauseResumeBtn').style.color = isPaused ? 'white' : 'black';
                notifyUser('Pond0x Status', `Autominer ${isPaused ? 'paused' : 'resumed'}`);
                if (isPaused && runTimeout) {
                    clearTimeout(runTimeout);
                    runTimeout = null;
                    nextRetryTime = null;
                    console.log(`${lh} - Cleared scheduled status check due to pause`);
                } else if (!isPaused && !runTimeout && autominerManuallyStarted) {
                    runTimeout = setTimeout(run, getTimeMS(window.pond0xO.runInterval));
                }
            } catch (error) {
                console.error(`${lh} - Failed to toggle pause/resume:`, error.message);
            }
        });

        document.getElementById('claimWaitBtn').addEventListener('click', async () => {
            try {
                isClaimWaitMode = !isClaimWaitMode;
                await GM.setValue('pond0xIsClaimWaitMode', isClaimWaitMode);
                const claimWaitBtn = document.getElementById('claimWaitBtn');
                claimWaitBtn.textContent = isClaimWaitMode ? 'Disable Claim + Wait' : 'Enable Claim + Wait';
                claimWaitBtn.style.background = isClaimWaitMode ? '#28a745' : '#17a2b8';
                console.log(`${lh} - Claim + Wait mode ${isClaimWaitMode ? 'enabled' : 'disabled'}`);
                notifyUser('Pond0x Status', `Claim + Wait mode ${isClaimWaitMode ? 'enabled' : 'disabled'}`);
                if (!autominerManuallyStarted) {
                    await GM.setValue('pond0xWaitUntil', 0);
                    console.log(`${lh} - Cleared waitUntil as autominer was not manually started`);
                }
            } catch (error) {
                console.error(`${lh} - Failed to toggle Claim + Wait:`, error.message);
            }
        });

        document.getElementById('claimWaitPeriodInput').addEventListener('change', async (e) => {
            try {
                let minutes = parseInt(e.target.value);
                if (minutes < 1) minutes = 1;
                if (minutes > 60) minutes = 60;
                claimWaitPeriodMinutes = minutes;
                await GM.setValue('pond0xClaimWaitPeriodMinutes', claimWaitPeriodMinutes);
                console.log(`${lh} - Claim + Wait period updated to ${claimWaitPeriodMinutes} minutes`);
            } catch (error) {
                console.error(`${lh} - Failed to set Claim + Wait period:`, error.message);
            }
        });

        document.getElementById('claimIntervalInput').addEventListener('change', async (e) => {
            try {
                claimIntervalMinutes = parseInt(e.target.value);
                if (claimIntervalMinutes < 5) claimIntervalMinutes = 5;
                if (claimIntervalMinutes > 240) claimIntervalMinutes = 240;
                await GM.setValue('pond0xClaimIntervalMinutes', claimIntervalMinutes);
                console.log(`${lh} - Claim interval updated to ${claimIntervalMinutes} minutes`);
            } catch (error) {
                console.error(`${lh} - Failed to set Claim Interval:`, error.message);
            }
        });

        document.getElementById('smartClaimThresholdInput').addEventListener('change', async (e) => {
            try {
                let value = parseFloat(e.target.value);
                const unit = document.getElementById('smartClaimUnitSelect').value;
                if (unit === 'Million') {
                    smartClaimThreshold = value * 1000000;
                    if (smartClaimThreshold < 200000000) smartClaimThreshold = 200000000;
                } else {
                    smartClaimThreshold = value * 1000000000;
                    if (smartClaimThreshold < 200000000) smartClaimThreshold = 200000000;
                }
                await GM.setValue('pond0xSmartClaimThreshold', smartClaimThreshold);
                console.log(`${lh} - Smart claim threshold updated to ${smartClaimThreshold} tokens (${formatClaimValue(smartClaimThreshold)})`);
            } catch (error) {
                console.error(`${lh} - Failed to set Smart Claim threshold:`, error.message);
            }
        });

        document.getElementById('smartClaimUnitSelect').addEventListener('change', async (e) => {
            try {
                smartClaimUnit = e.target.value;
                await GM.setValue('pond0xSmartClaimUnit', smartClaimUnit);
                document.getElementById('smartClaimUnitLabel').textContent = smartClaimUnit;
                const input = document.getElementById('smartClaimThresholdInput');
                input.value = smartClaimUnit === 'Million' ? smartClaimThreshold / 1000000 : smartClaimThreshold / 1000000000;
                input.min = smartClaimUnit === 'Million' ? 200 : 0.2;
                console.log(`${lh} - Smart claim unit updated to ${smartClaimUnit}`);
            } catch (error) {
                console.error(`${lh} - Failed to set Smart Claim unit:`, error.message);
            }
        });

        document.getElementById('exportHistoryBtn').addEventListener('click', () => {
            try {
                exportClaimHistoryToCSV();
                notifyUser('Pond0x History', 'Claim history exported successfully as CSV');
            } catch (error) {
                console.error(`${lh} - Failed to export claim history:`, error.message);
            }
        });

        const autoToggle = document.getElementById('autoToggle');
        const toggleLabel = document.getElementById('toggleLabel');
        const claimWaitBtn = document.getElementById('claimWaitBtn');
        const smartClaimToggle = document.getElementById('smartClaimToggle');
        const smartClaimToggleLabel = document.getElementById('smartClaimToggleLabel');
        const errorStateRestartToggle = document.getElementById('errorStateRestartToggle');
        const errorStateRestartToggleLabel = document.getElementById('errorStateRestartToggleLabel');
        const claimIntervalLabel = document.getElementById('claimIntervalLabel');
        const claimWaitPeriodLabel = document.getElementById('claimWaitPeriodLabel');
        const smartClaimThresholdLabel = document.getElementById('smartClaimThresholdLabel');
        const pauseResumeBtn = document.getElementById('pauseResumeBtn');

        const tooltipContent = {
            toggleMiningBtn: () => isAutoMode ? 'Auto Mode: Automatically checks mining status and starts mining when available. Handles claiming based on set thresholds.' : 'Manual Mode: Manually start and stop mining. Claiming still occurs automatically based on set thresholds.',
            claimWaitBtn: () => isClaimWaitMode ? `Claim + Wait mode is active. The miner will mine, claim, wait ${claimWaitPeriodMinutes} minutes, and repeat until this mode is disabled.` : `Enable Claim + Wait mode to mine, claim, wait ${claimWaitPeriodMinutes} minutes, and repeat automatically until disabled.`,
            smartClaimToggleLabel: 'When enabled, claims occur at the set Smart Claim threshold or when hash rate hits zero. When disabled, claims only occur when hash rate hits zero.',
            errorStateRestartToggleLabel: 'When enabled, restarts the miner if it starts with invalid unclaimed values (100k, 1m, 1.1m). When disabled, continues mining to accrue rewards despite these error states.',
            claimIntervalLabel: 'Sets the maximum time interval (in minutes) after which a claim will be triggered, regardless of other conditions.',
            claimWaitPeriodLabel: 'Sets the wait period (in minutes) after a claim in Claim + Wait mode before starting the next mining session.',
            smartClaimThresholdLabel: 'Sets the unclaimed token threshold at which a claim is triggered when Smart Claim is enabled.',
            pauseResumeBtn: 'Pauses or resumes the autominer. When paused, all automatic actions (mining, claiming, status checks) are halted until resumed.'
        };

        const showTooltip = (element) => {
            try {
                const content = tooltipContent[element.id];
                tooltipBox.textContent = typeof content === 'function' ? content() : content;
                const rect = element.getBoundingClientRect();
                tooltipBox.style.top = `${rect.bottom + window.scrollY + 5}px`;
                tooltipBox.style.left = `${rect.left + window.scrollX}px`;
                tooltipBox.classList.add('visible');
                tooltipBox.style.display = 'block';
                tooltipBox.style.opacity = '1';
            } catch (error) {
                console.error(`${lh} - Error in showTooltip:`, error);
            }
        };

        const hideTooltip = () => {
            try {
                tooltipBox.classList.remove('visible');
                tooltipBox.style.display = 'none';
                tooltipBox.style.opacity = '0';
            } catch (error) {
                console.error(`${lh} - Error in hideTooltip:`, error);
            }
        };

        toggleMiningBtn.addEventListener('mouseenter', () => showTooltip(toggleMiningBtn));
        toggleMiningBtn.addEventListener('mouseleave', hideTooltip);
        claimWaitBtn.addEventListener('mouseenter', () => showTooltip(claimWaitBtn));
        claimWaitBtn.addEventListener('mouseleave', hideTooltip);
        smartClaimToggleLabel.addEventListener('mouseenter', () => showTooltip(smartClaimToggleLabel));
        smartClaimToggleLabel.addEventListener('mouseleave', hideTooltip);
        errorStateRestartToggleLabel.addEventListener('mouseenter', () => showTooltip(errorStateRestartToggleLabel));
        errorStateRestartToggleLabel.addEventListener('mouseleave', hideTooltip);
        claimIntervalLabel.addEventListener('mouseenter', () => showTooltip(claimIntervalLabel));
        claimIntervalLabel.addEventListener('mouseleave', hideTooltip);
        claimWaitPeriodLabel.addEventListener('mouseenter', () => showTooltip(claimWaitPeriodLabel));
        claimWaitPeriodLabel.addEventListener('mouseleave', hideTooltip);
        smartClaimThresholdLabel.addEventListener('mouseenter', () => showTooltip(smartClaimThresholdLabel));
        smartClaimThresholdLabel.addEventListener('mouseleave', hideTooltip);
        pauseResumeBtn.addEventListener('mouseenter', () => showTooltip(pauseResumeBtn));
        pauseResumeBtn.addEventListener('mouseleave', hideTooltip);

        if (toggleLabel && autoToggle) {
            toggleLabel.addEventListener('click', async () => {
                try {
                    isAutoMode = !isAutoMode;
                    await GM.setValue('pond0xIsAutoMode', isAutoMode);
                    toggleLabel.textContent = isAutoMode ? 'Auto' : 'Manual';
                    toggleLabel.style.background = isAutoMode ? '#28a745' : '#dc3545';
                    autoToggle.checked = isAutoMode;
                    toggleMiningBtn.textContent = isMiningRunning ? (isAutoMode ? 'Stop Auto Mining' : 'Stop Manual Mining') : (isAutoMode ? 'Start Auto Mining' : 'Start Manual Mining');
                    toggleMiningBtn.style.background = isMiningRunning ? '#dc3545' : '#28a745';
                    if (!isAutoMode) {
                        autominerManuallyStarted = false;
                        await GM.setValue('pond0xAutominerStarted', false);
                        if (runTimeout) {
                            clearTimeout(runTimeout);
                            runTimeout = null;
                        }
                    }
                } catch (error) {
                    console.error(`${lh} - Failed to toggle Auto Mode:`, error.message);
                }
            });
        }

        if (smartClaimToggleLabel && smartClaimToggle) {
            smartClaimToggleLabel.addEventListener('click', async () => {
                try {
                    isSmartClaimEnabled = !isSmartClaimEnabled;
                    await GM.setValue('pond0xIsSmartClaimEnabled', isSmartClaimEnabled);
                    smartClaimToggleLabel.textContent = isSmartClaimEnabled ? 'On' : 'Off';
                    smartClaimToggleLabel.style.background = isSmartClaimEnabled ? '#28a745' : '#dc3545';
                    smartClaimToggle.checked = isSmartClaimEnabled;
                    console.log(`${lh} - Smart Claim toggle set to ${isSmartClaimEnabled ? 'enabled' : 'disabled'}`);
                    if (!autominerManuallyStarted) {
                        await GM.setValue('pond0xAutominerStarted', false);
                        console.log(`${lh} - Ensured autominerManuallyStarted remains false after toggling Smart Claim`);
                    }
                } catch (error) {
                    console.error(`${lh} - Failed to toggle Smart Claim:`, error.message);
                }
            });
        }

        if (errorStateRestartToggleLabel && errorStateRestartToggle) {
            errorStateRestartToggleLabel.addEventListener('click', async () => {
                try {
                    isErrorStateRestartEnabled = !isErrorStateRestartEnabled;
                    await GM.setValue('pond0xIsErrorStateRestartEnabled', isErrorStateRestartEnabled);
                    errorStateRestartToggleLabel.textContent = isErrorStateRestartEnabled ? 'On' : 'Off';
                    errorStateRestartToggleLabel.style.background = isErrorStateRestartEnabled ? '#28a745' : '#dc3545';
                    errorStateRestartToggle.checked = isErrorStateRestartEnabled;
                    console.log(`${lh} - Error State Restarts toggle set to ${isErrorStateRestartEnabled ? 'enabled' : 'disabled'}`);
                } catch (error) {
                    console.error(`${lh} - Failed to toggle Error State Restarts:`, error.message);
                }
            });
        }

        setInterval(async () => {
            try {
                const statusSpan = document.getElementById('globalStatus');
                const retrySpan = document.getElementById('nextRetry');
                if (statusSpan) statusSpan.textContent = currentGlobalStatus;
                if (retrySpan) retrySpan.textContent = formatTime(nextRetryTime);
                await updateClaimSummaryBox();
                const toggleMiningBtn = document.getElementById('toggleMiningBtn');
                if (toggleMiningBtn) {
                    toggleMiningBtn.textContent = isMiningRunning 
                        ? (isAutoMode ? 'Stop Auto Mining' : 'Stop Manual Mining') 
                        : (isAutoMode ? 'Start Auto Mining' : 'Start Manual Mining');
                    toggleMiningBtn.style.background = isMiningRunning ? '#dc3545' : '#28a745';
                }
            } catch (error) {
                console.error(`${lh} - Failed to update control panel:`, error.message);
            }
        }, 5000);

        console.log(`${lh} - Control panel created successfully`);
        isControlPanelReady = true;
    } catch (e) {
        console.error(`${lh} - Error creating control panel: ${e.message}`);
        notifyUser('Pond0x Error', `Error creating control panel: ${e.message}`);
        isControlPanelReady = true;
    }
};

    const exportClaimHistoryToCSV = () => {
        let csvContent = 'data:text/csv;charset=utf-8,';

        csvContent += 'Historical Claims\n';
        csvContent += 'Date,Amount\n';
        historicalClaims.forEach(claim => {
            const date = new Date(claim.date * 1000).toISOString();
            const amount = formatClaimValue(claim.amount);
            csvContent += `${date},${amount}\n`;
        });

        csvContent += '\nDaily Claims\n';
        csvContent += 'Date,Total Amount\n';
        Object.entries(dailyClaims).forEach(([date, total]) => {
            const formattedTotal = formatClaimValue(total);
            csvContent += `${date},${formattedTotal}\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'pond0x_claim_history.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const createSummaryBoxNow = (container) => {
        try {
            const summaryBox = document.createElement('div');
            summaryBox.id = 'pond0xClaimSummary';

            let topPosition = 10;
            let leftPosition = 10;
            let positionStyle = 'fixed';

            if (container !== document.body && container.offsetWidth > 0 && container.offsetHeight > 0) {
                positionStyle = 'absolute';
                topPosition = container.offsetTop + 10;
                leftPosition = container.offsetLeft + 10;
            }

            summaryBox.style.cssText = `
                position: ${positionStyle};
                left: ${leftPosition}px;
                top: ${topPosition}px;
                width: 300px;
                background: linear-gradient(to bottom, #4a1d7d, #8a2be2);
                border: 2px solid #000000;
                border-radius: 10px;
                color: #ffffff;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                padding: 10px;
                z-index: 1000;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                overflow: auto;
                resize: both;
                min-width: 300px;
                min-height: 200px;
                display: block;
                visibility: visible;
                cursor: move;
                user-select: none;
            `;

            let isDragging = false, initialX, initialY;
            summaryBox.addEventListener('mousedown', (e) => {
                if (e.target.tagName !== 'BUTTON' && !e.target.closest('button') && !e.target.closest('strong')) {
                    isDragging = true;
                    initialX = e.clientX - parseInt(summaryBox.style.left);
                    initialY = e.clientY - parseInt(summaryBox.style.top);
                    e.preventDefault();
                }
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    summaryBox.style.left = `${e.clientX - initialX}px`;
                    summaryBox.style.top = `${e.clientY - initialY}px`;
                    const boxRect = summaryBox.getBoundingClientRect();
                    if (boxRect.left < 0) summaryBox.style.left = '0px';
                    if (boxRect.top < 0) summaryBox.style.top = '0px';
                    if (boxRect.right > window.innerWidth) summaryBox.style.left = `${window.innerWidth - boxRect.width}px`;
                    if (boxRect.bottom > window.innerHeight) summaryBox.style.top = `${window.innerHeight - boxRect.height}px`;
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });

            const today = new Date();
            const dateString = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
            const averageClaimTime = calculateAverageClaimTime();
            const previousThreeDaysClaims = getPreviousThreeDaysClaims();
            const formattedTotalClaimed = formatClaimValue(totalClaimed);
            const formattedLastClaim = formatClaimValue(lastClaimValue);
            const avgClaimAmount = calculateAverageClaimAmount();
            const formattedAvgClaimAmount = formatClaimValue(avgClaimAmount);

            let miningStatusMessage = isMiningRunning ? 'Mining' : 'Idle';
            if (!isMiningRunning) {
                miningStatusMessage = statusLock ? `Checking status...` :
                                      (nextRetryTime ? `Next cycle in ${(nextRetryTime - getTime()) > 60 ? Math.floor((nextRetryTime - getTime()) / 60) + ' mins' : (nextRetryTime - getTime()) + ' secs'}` : 'Idle');
            }

            if (lastRenderedTotalClaimed !== totalClaimed || lastRenderedLastClaim !== lastClaimValue) {
                console.log(`${lh} - Rendering summary: Total Claimed = ${totalClaimed} (formatted as ${formattedTotalClaimed}), Last Claim = ${lastClaimValue} (formatted as ${formattedLastClaim})`);
                lastRenderedTotalClaimed = totalClaimed;
                lastRenderedLastClaim = lastClaimValue;
            }

            summaryBox.innerHTML = `
                <div style="font-weight: bold; background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px; margin-bottom: 10px; text-align: center;">
                    Ez Miner 🪷 ⛏️
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Date:</strong> ${dateString}<br>
                    <strong>Claims:</strong> ${claimCount}<br>
                    <strong>Total Claimed:</strong> ${formattedTotalClaimed}<br>
                    <strong>Last Claim:</strong> ${formattedLastClaim}<br>
                    <strong>Last Claim Time:</strong> ${lastClaimTime ? new Date(lastClaimTime * 1000).toLocaleTimeString() : 'N/A'}<br>
                    <strong>Average Claim Time:</strong> ${averageClaimTime > 0 ? `${averageClaimTime} mins` : 'N/A'}<br>
                    <strong>Average Claim Amount (4 days):</strong> ${avgClaimAmount > 0 ? formattedAvgClaimAmount : 'N/A'}<br>
                    <strong>Page Reloads:</strong> ${pageReloads}<br>
                    <strong>Page Reload Reason:</strong> <span title="Reason for the last page reload: ${reloadReasonStored}">${reloadReasonStored}</span><br>
                    <strong>Mining Status:</strong> <span style="color: ${isMiningRunning ? '#28a745' : '#dc3545'}">${miningStatusMessage}</span><br>
                    <strong>Global Mining Status:</strong> <span style="color: ${currentGlobalStatus === 'Mining: Active' ? '#28a745' : currentGlobalStatus === 'Mining: Struggling' ? '#ffc107' : '#dc3545'}">${currentGlobalStatus}</span>
                </div>
                <div style="background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px;">
                    <strong style="cursor: pointer;" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent.replace(/.$/, this.nextElementSibling.style.display === 'none' ? '▼' : '▲');">
                        Total Daily Claims ▼
                    </strong>
                    <div style="display: block;">
                        ${previousThreeDaysClaims}
                    </div>
                </div>
                <div style="background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px; margin-top: 10px;">
                    <strong style="cursor: pointer;" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent.replace(/.$/, this.nextElementSibling.style.display === 'none' ? '▼' : '▲');">
                        Status Log ▼
                    </strong>
                    <div style="display: block;">
                        ${lastStatusMessage || 'No recent status'}
                    </div>
                </div>
                <div style="text-align: center; margin-top: 10px;">
                    <button id="resetDailyStatsBtn" style="background: #28a745; color: white; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Stats Reset</button>
                </div>
            `;

            if (container !== document.body) {
                container.parentNode.appendChild(summaryBox);
                console.log(`${lh} - Summary box appended to container's parent: ${container.parentNode.tagName}.${Array.from(container.parentNode.classList).join('.')}`);
            } else {
                document.body.appendChild(summaryBox);
                console.log(`${lh} - Summary box appended to document.body as fallback`);
            }

            const boxRect = summaryBox.getBoundingClientRect();
            console.log(`${lh} - Summary box created at position: top=${boxRect.top}px, left=${boxRect.left}px, visible=${boxRect.width > 0 && boxRect.height > 0}`);

            const resetButton = summaryBox.querySelector('#resetDailyStatsBtn');
            resetButton.addEventListener('click', resetDailyStats);
        } catch (e) {
            console.error(`${lh} - Error inserting summary box: ${e.message}`);
            notifyUser('Pond0x Error', `Error inserting summary box: ${e.message}`);
        }
    };

    const updateClaimSummaryBox = async () => {
        const box = document.getElementById('pond0xClaimSummary');
        if (!box) {
            await createClaimSummaryBox();
            return;
        }

        try {
            const today = new Date();
            const dateString = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
            const averageClaimTime = calculateAverageClaimTime();
            const previousThreeDaysClaims = getPreviousThreeDaysClaims();
            const formattedTotalClaimed = formatClaimValue(totalClaimed);
            const formattedLastClaim = formatClaimValue(lastClaimValue);
            const avgClaimAmount = calculateAverageClaimAmount();
            const formattedAvgClaimAmount = formatClaimValue(avgClaimAmount);

            let miningStatusMessage = isMiningRunning ? 'Mining' : 'Idle';
            if (!isMiningRunning) {
                miningStatusMessage = statusLock ? `Checking status...` :
                                      (nextRetryTime ? `Next cycle in ${(nextRetryTime - getTime()) > 60 ? Math.floor((nextRetryTime - getTime()) / 60) + ' mins' : (nextRetryTime - getTime()) + ' secs'}` : 'Idle');
            }

            if (lastRenderedTotalClaimed !== totalClaimed || lastRenderedLastClaim !== lastClaimValue) {
                console.log(`${lh} - Rendering summary: Total Claimed = ${totalClaimed} (formatted as ${formattedTotalClaimed}), Last Claim = ${lastClaimValue} (formatted as ${formattedLastClaim})`);
                lastRenderedTotalClaimed = totalClaimed;
                lastRenderedLastClaim = lastClaimValue;
            }

            box.innerHTML = `
                <div style="font-weight: bold; background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px; margin-bottom: 10px; text-align: center;">
                    Ez Miner 🪷 ⛏️
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Date:</strong> ${dateString}<br>
                    <strong>Claims:</strong> ${claimCount}<br>
                    <strong>Total Claimed:</strong> ${formattedTotalClaimed}<br>
                    <strong>Last Claim:</strong> ${formattedLastClaim}<br>
                    <strong>Last Claim Time:</strong> ${lastClaimTime ? new Date(lastClaimTime * 1000).toLocaleTimeString() : 'N/A'}<br>
                    <strong>Average Claim Time:</strong> ${averageClaimTime > 0 ? `${averageClaimTime} mins` : 'N/A'}<br>
                    <strong>Average Claim Amount (4 days):</strong> ${avgClaimAmount > 0 ? formattedAvgClaimAmount : 'N/A'}<br>
                    <strong>Page Reloads:</strong> ${pageReloads}<br>
                    <strong>Page Reload Reason:</strong> <span title="Reason for the last page reload: ${reloadReasonStored}">${reloadReasonStored}</span><br>
                    <strong>Mining Status:</strong> <span style="color: ${isMiningRunning ? '#28a745' : '#dc3545'}">${miningStatusMessage}</span><br>
                    <strong>Global Mining Status:</strong> <span style="color: ${currentGlobalStatus === 'Mining: Active' ? '#28a745' : currentGlobalStatus === 'Mining: Struggling' ? '#ffc107' : '#dc3545'}">${currentGlobalStatus}</span>
                </div>
                <div style="background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px;">
                    <strong style="cursor: pointer;" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent.replace(/.$/, this.nextElementSibling.style.display === 'none' ? '▼' : '▲');">
                        Total Daily Claims ▼
                    </strong>
                    <div style="display: block;">
                        ${previousThreeDaysClaims}
                    </div>
                </div>
                <div style="background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px; margin-top: 10px;">
                    <strong style="cursor: pointer;" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent.replace(/.$/, this.nextElementSibling.style.display === 'none' ? '▼' : '▲');">
                        Status Log ▼
                    </strong>
                    <div style="display: block;">
                        ${lastStatusMessage || 'No recent status'}
                    </div>
                </div>
                <div style="text-align: center; margin-top: 10px;">
                    <button id="resetDailyStatsBtn" style="background: #28a745; color: white; border: none; border-radius: 3px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Stats Reset</button>
                </div>
            `;

            const resetButton = box.querySelector('#resetDailyStatsBtn');
            resetButton.addEventListener('click', resetDailyStats);
        } catch (e) {
            console.error(`${lh} - Error updating summary box: ${e.message}`);
            notifyUser('Pond0x Error', `Error updating summary box: ${e.message}`);
        }
    };

    // Main execution
    console.log(`${lh} - Starting monitoring cycle (waiting for manual start if first run)...`);
    await performDailyReset();
    await createClaimSummaryBox();
    await createControlPanel();
    await run();

    // Add event listener for page reloads
    window.addEventListener('beforeunload', async () => {
        await GM.setValue('pond0xReloadReason', reloadReason || 'User Navigation');
    });
})();
