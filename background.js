chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true });
  chrome.action.setIcon({ path: "icons/enabled.png" });
  chrome.action.setTitle({ title: "Disable Auto-Start" });
});

chrome.action.onClicked.addListener(async (tab) => {
  const { enabled } = await chrome.storage.local.get("enabled");
  const newEnabledState = !enabled;
  await chrome.storage.local.set({ enabled: newEnabledState });

  const iconPath = newEnabledState
    ? "icons/enabled.png"
    : "icons/disabled.png";
  const title = newEnabledState ? "Disable Auto-Start" : "Enable Auto-Start";

  chrome.action.setIcon({ path: iconPath });
  chrome.action.setTitle({ title });

  if (newEnabledState) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "checkForButton" });
    });
  }
});
