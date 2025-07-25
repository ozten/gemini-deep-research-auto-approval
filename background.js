chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: false });
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
});
