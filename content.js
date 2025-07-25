console.log("Gemini Auto-Start: Content script loaded.");

chrome.storage.local.get("enabled", ({ enabled }) => {
  console.log("Gemini Auto-Start: Extension enabled:", enabled);
  if (enabled) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const buttons = document.querySelectorAll("button");
          for (const button of buttons) {
            if (button.innerText.trim() === "Start research") {
              console.log("Gemini Auto-Start: 'Start research' button found. Clicking...");
              button.click();
              observer.disconnect();
              chrome.storage.local.set({ enabled: false });
              console.log("Gemini Auto-Start: Extension disabled.");
              return;
            }
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});
