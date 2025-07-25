console.log("Gemini Auto-Start: Content script loaded.");

function findAndClickButton() {
  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    if (button.innerText.trim() === "Start research") {
      console.log("Gemini Auto-Start: 'Start research' button found. Clicking...");
      button.click();
      chrome.storage.local.set({ enabled: false });
      console.log("Gemini Auto-Start: Extension disabled.");
      return true;
    }
  }
  return false;
}

chrome.storage.local.get("enabled", ({ enabled }) => {
  console.log("Gemini Auto-Start: Extension enabled:", enabled);
  if (enabled) {
    const observer = new MutationObserver((mutationsList, observer) => {
      if (findAndClickButton()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkForButton") {
    findAndClickButton();
  }
});
