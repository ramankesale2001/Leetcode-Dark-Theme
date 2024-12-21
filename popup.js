document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleDarkMode,
      });
    });
  });
  
  function toggleDarkMode() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("light")) {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
    }
  }
  