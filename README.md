<h1 align="center"> EzmodeV2 - Pond0x Automation Extension</h1>

<div align="center">
  <img src="icon128.png" alt="Logo">
<h2>🪷 🤝 ⛏️ 💎</h2>
</div>

**EzmodeV2** is a browser extension designed to automate some participation activities on [Pond0x](https://www.pond0x.com/). With version 4.2.0.699, this extension provides a seamless experience for users looking to optimize their mining and swapping operations with minimal manual intervention. Featuring a user-friendly control panel, detailed status tracking, and smart automation features, EzmodeV2 is your go-to tool for efficient Pond0x interactions.

-  **Wallet integration**: Note the extension does not connect to or interact with your wallet in any way. It does not create any non native Pond0x signatures or need your private key or seed phrase to function.
-  **Full Automation**: Note as the extension does not interact with your wallet. You will require an autoclicker or pyautogui script in order to confirm the Pond0x wallet signatures. 

## Features

### Mining Automation
- **Auto-Mining**: Automatically starts mining sessions.
- **Manual-Mining**: Requires user action to start each mining session. Respects all user defined values within control panel.
- **Smart Claim**: Claims tokens based on a configurable threshold (e.g., 200M tokens) or when the hash rate drops to zero.
- **Enable or Disable "Claim + Wait"**: Mines, claims, waits a user defined number of minutes, and repeats.
- **Control Panel**: Toggle between Auto and Manual modes, claim anyway (force claim regardless of settings). pause/resume mining, enable or disable "Claim and Wait", adjust Claim Interval (how long will a session go before forcing a claim. Use to prevent expired sessions), toggle "Smart Claim" on or off, set "Smart Claim" amount in millions or billions, toggle "Error State Restarts" on or off (if miner loads in 100k, 1m, or 1.1m page will force refresh and start a new session).
- **Status Monitoring**: Continuously checks the global mining status via a hidden tab and updates the user interface accordingly. **This function has been bypassed in this branch.**
- **Summary Box**: Displays real-time stats including total claimed tokens, last claim, average claim time, and daily claim history.

### Swapping Automation
- **Auto-Swapping**: Automates token swaps on Pond0x's Solana swap page with customizable pricing in all modes. All functions are contained and set within a single moveable control panel.
- **Swap Modes**:
- - **Auto**: Will swap on the hard coded random referal link that is set on line 1642 of the content_autoswapper file. You can replace this with any referal link youd like by directly accesing the file after download.
- - **Referral**: After each successful swap One-way or a swap cycle in Two-way modes the page will automatically refresh and load a new random referral link. There is no memory for this function so it may duplicate links before completing the list. As of July 31, 2025 there are 1,522 unique refferral links. 
- **Swap Types**:
  - **One-way Swaps**: Swaps your chosen sell token into the buy token until sell token no longer has funds to cover the set swap value.
  - **Two-way Swaps**: Swaps will be made alternating your sell and buy tokens in a swap cycle creating a loop until one or the other no longer has funds to cover the set swap value. (example of one swap cycle: usdc>sol then sol> usdc). To do this the extension will scrub the buy amount displayed and use it as the sell amount after inputting the bought token as the new sell. Every swap cycle begins with the users predefined swap value.
- **Custom Pricing**: Preloaded at 0.01 this box allows you to set the sell amount (Important: This is not a value it is a count of the token being sold). No commas are needed to define larger numbers (Example: 1,000 should be entered as 1000). A single period is used to define smaller than 1 values (example 0.1).
- **Swaps Completed**: Counts the number of swaps completed by EzModeV2. Resets to 0 once the browser is closed. (Important: this is not your Swap Manifest Count!)
- **Swap Frequency**: Adjust how often swaps occur (default: every 1 seconds).
- **Token Pair Selection**: Choose your sell and buy tokens (Preloaded options: USDC, SOL, wPOND, USDT, hSOL, PepeonSOL & wBTC) with an easy dropdown interface. Simply choose your pair and click the Update button to automatically load the Pond0x UI with your choices.
- **New Token Input**: You can add your own Solana tokens. Simply type in the token name and then the contract address in the defined boxes and click add. This will permanetly add the token to the selectable tokens in the sell and buy dropdowns.
- **Total Swap Count Checker**: Input your wallet address to fetch and display your manifest swaps.

### General Features
- **Notifications**: Receive alerts for mining status, claims, swaps, and errors.
- **Drag-and-Drop UI**: Move the control panel and summary box anywhere on the screen.
- **Stats Tracking**: Monitor claim counts, total claimed tokens, swap counts, and historical data.
- **Export History**: Export your claim history as a CSV file for record-keeping.
- **Error Handling**: Automatically reloads the page on detected crashes or stuck states to ensure continuous operation.

## Installation

### Prerequisites
- **Google Chromium Browser**: EzModeV2 is a Chrome extension and requires Google Chrome, Brave, Firefox, Edge to function.
- **Pond0x Account**: You need an active Pond0x account and a connected wallet (e.g., Phantom) to interact with the mining and swapping features.
-  **Wallet interation**: Note the extension does not connect to or interact with your wallet in any way. It does not create any non native Pond0x signatures or need your private key or seed phrase to function. 

### Steps to Install

1. **Download Zipped Files**:
    Press code button in github to download the files as a zip for ez-mode

1. **Load the Extension in Chrome**:
- Open Chrome and go to `chrome://extensions/`.
- Enable “Developer mode” (toggle in the top-right corner).
- Click “Load unpacked” and select the `EzmodeV2-Mining-Status-Bypass` folder you cloned.

-Alternativley you can clone the repository

**Clone the Repository**:
    git clone https://github.com/[your-username]/EzmodeV2/mining-status-bypass.git
   cd ez-mode

- Open Chrome and go to `chrome://extensions/`.
- Enable “Developer mode” (toggle in the top-right corner).
- Click “Load unpacked” and select the `EZmodeV2-mining-status-bypass` folder you cloned.

2. **Verify Installation**:
- You should see the “EzmodeV2” extension listed with the swapping lotus icon (as shown in the manifest: `icon48.png` and `icon128.png`).
- The extension will automatically activate when you visit `https://www.pond0x.com/mining` or `https://www.pond0x.com/swap/solana`.

-----

## Usage

### Mining on Pond0x 

1. **Navigate to the Mining Page**:
- Go to `https://www.pond0x.com/mining` directly by bookmark or entering the url. If you travel to the mining page via the Pond0x.com home page first you will need to refresh the page to load in the control panel and summary box.
2. **Control Panel**:
- A control panel will appear in the top-right corner of the page.
- **Mode Toggle**: Switch between “Auto” (default) and “Manual” modes.
- **Start/Stop Mining**: Click “Start Auto Mining” (or “Start Manual Mining”) to begin.
- **Pause/Resume**: Pause or resume the automation process.
- **Claim + Wait Mode**: Enable this to mine, claim, wait user defined number of minutes, and repeat.
- **Settings**:
  - Set the **Claim and Wait Period** in minutes.
  - Set the **Claim Interval** in minutes (maximum time before a claim is triggered).
  - Configure and turn on or off **Smart Claim** (claims when unclaimed tokens reach a threshold).
  - Turn on or off **Error State Restarts** (forces a page refresh and starts a new mining session if session starts at 100k, 1m, or 1.1m unclaimed rewards)
- **Export History** Downloads a CSV file with your claim history.
3. **Summary Box**:
- A draggable summary box will appear near the mining display, showing:
  - Date, number of claims, total claimed tokens, last claim amount, and more.
  - Daily claim history for each of the past 4 days.
  - Mining status (e.g., “Mining” or “Idle”) and global mining status (e.g., “Mining: Active”).
- Click “Stats Reset” to reset daily stats.

### Swapping on Pond0x

1. **Navigate to the Swap Page**:
- Go to `https://www.pond0x.com/swap/solana`directly by bookmark or entering the url. If you travel to the solana swap page via the Pond0x.com home page first you will need to refresh the page to load in the control panel.
2. **Control Panel**:
- A control panel will appear below the swap button.
- **Mode Toggle**: Switch between “Auto” (default) and “Referral” modes.
- **Start/Stop Swapping**: Click “Start Swapping” to begin.
- **Swap Modes**:
  - **One-way Swaps**: Swaps your chosen sell token into the buy token until sell token no longer has funds to cover the set swap value.
  - **Two-way Swaps**: Swaps will be made alternating your sell and buy tokens in a swap cycle creating a loop until one or the other no longer has funds to cover the set swap value.
  - **Custom Pricing**: Preloaded at 0.01 this box allows you to set the sell amount (Important: This is not a value it is a count of the token being sold). No commas are needed to define larger numbers (Example: 1,000 should be entered as 1000). A single period is used to define smaller than 1 values (example 0.1).
- **Swaps Completed**: Counts the number of swaps completed by EzModeV2. Resets to 0 once the browser is closed. (Important: this is not your Swap Manifest Count!)
- **Swap Frequency**: Adjust how often swaps occur (in seconds).
- **Token Pair Selection**: Choose your sell and buy tokens (Preloaded options: USDC, SOL, wPOND, USDT, hSOL, PepeonSOL & wBTC),and click “Update” 
- **Total Swap Count Checker**: Enter your wallet address to fetch manifest swaps (displayed in the panel).
- **Stats Reset**: Reset the swap completed counter.
3. **Monitoring**:
- The panel shows a log of recent actions.

***Note previous version of EzMode by Bearly used his referral link as a hard coded standard when loading in the extension. This has been altered and now uses a referral that was picked at random.***

-----

## Permissions

The extension requires the following permissions (as defined in `manifest.json`):

- **storage**: To save settings and claim/swap history.
- **notifications**: To send alerts for mining and swapping events.
- **tabs**: To open and manage hidden tabs for status polling and manifest scraping.
- **activeTab**: To interact with the current Pond0x page.
- **scripting**: To inject scripts into pages for automation.
- **host_permissions**:
  - `https://cary0x.github.io/status-mini/`: For polling global mining status.
  - `https://www.pond0x.com/*`: For automating mining and swapping.
  - `https://cary0x.github.io/docs/info/manifest`: For fetching manifest swaps.

-----

## Development

### Project Structure

```
ez-mode/
├── background.js         # Background script for notifications and tab management
├── content_autominer.js  # Script for mining automation
├── content_autoswapper.js # Script for swapping automation
├── icon48.png            # 48x48 icon for Chrome
├── icon128.png           # 128x128 icon for Chrome
├── manifest.json         # Extension manifest
├── README.md             # This file
```

### Building and Testing

1. **Modify Code**:
- Edit the JavaScript files (`background.js`, `content_autominer.js`, `content_autoswapper.js`) as needed.
- Update the `manifest.json` if you add new permissions or content scripts.
2. **Reload Extension**:
- Go to `chrome://extensions/`, find “EzmodeV2” and click “Reload.”
3. **Test**:
- Visit `https://www.pond0x.com/mining` and `https://www.pond0x.com/swap/solana` to test the automation features.
- Check the console logs (`Ctrl+Shift+J`) for debugging.

-----

## Known Issues

- **Page Load Delays**: If the Pond0x page takes too long to load, the extension may timeout. It will attempt to proceed but some features might not work.
- **Invalid Unclaimed Values**: If the mining page shows invalid unclaimed values (e.g., “100k”, “1m”), the extension will reload the page to recover itself with no interation needed
- **Swap Button States**: If the swap button gets stuck (e.g., “loading…” or “pending”), the extension will reload the page after a timeout.
- **Network Issues**: The extension checks for network connectivity and reloads the page if disconnected.
- **Misses "Stop and Claim" button**: on occasion the script will miss the "stop and claim" button. If "claim and wait" is enabled it will begin the countdown and refresh starting a new session after the specified amount of time. If "claim and wait is disabled the page will hang indeffinatly or until user intervention.

-----

## Contributing

Contributions are welcome! If you’d like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

-----

## License

This project is licensed under the Creative Common non commercial license. Feel free to use it but anything you create should be made available to everyone for free.

-----

## Acknowledgements

- Thank you Bearly for putting in the work to build the original [EzMode](https://github.com/BEARLY-HODLING/Pond0x-EzMode-Extension) which this is made from and motivating me so I can continue helping the community of Pond0x.com! Additional thanks to @oothkoo and @DankMyMeme_ (on x.com) for building out the begginings of these scripts and inspiring us to create our own tools.

-----

## Contact

For questions or support, please open an issue on GitHub or contact @TheRaptorRoost on x.com.

-----

  
