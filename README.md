# Gemini Deep Research Auto-Approval

This Chrome extension automatically approves Gemini Deep Research Plans by clicking the "Start research" button.

## Features

-   Automatically clicks the "Start research" button on the Gemini Deep Research page.
-   Pause/Play functionality to enable/disable the extension.
-   Custom icons to indicate the extension's state.

## Local Development and Testing

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gemini-deep-research-auto-approval.git
    ```
2.  **Convert SVG icons to PNG:**
    The icons are currently in SVG format. You will need to convert `icons/enabled.svg` and `icons/disabled.svg` to 128x128 PNG files and save them as `icons/enabled.png` and `icons/disabled.png` respectively. You can use an online converter for this.
3.  **Load the extension in Chrome:**
    -   Open Chrome and navigate to `chrome://extensions`.
    -   Enable "Developer mode" in the top right corner.
    -   Click "Load unpacked".
    -   Select the directory where you cloned the repository.
4.  **Test the extension:**
    -   Navigate to `https://gemini.google.com/app`.
    -   Start a Deep Research query.
    -   The extension should automatically click the "Start research" button.
    -   You can toggle the extension on and off by clicking the extension's icon in the Chrome toolbar.

## TODO

-   [ ] Convert `icons/enabled.svg` to `icons/enabled.png` (128x128)
-   [ ] Convert `icons/disabled.svg` to `icons/disabled.png` (128x128)
-   [ ] Finalize the icons and ensure they are properly sized for the Chrome Web Store.
