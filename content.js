chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const startResearchButton = document.querySelector(
            'button[data-test-id="confirm-button"]'
          );
          if (startResearchButton) {
            startResearchButton.click();
            observer.disconnect();
            chrome.storage.local.set({ enabled: false });
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});
