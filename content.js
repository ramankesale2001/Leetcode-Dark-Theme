// Function to toggle between light and dark mode
function toggleDarkMode() {
    const htmlElement = document.documentElement;
  
    if (htmlElement.classList.contains("light")) {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
      console.log("Switched to dark mode.");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      console.log("Switched to light mode.");
    }
  }
  
  // Apply dark mode on script load
  toggleDarkMode();
  
  // Optional: Observe changes to ensure dark mode persists
  const observer = new MutationObserver(() => {
    const htmlElement = document.documentElement;
    if (!htmlElement.classList.contains("dark")) {
      toggleDarkMode();
    }
  });
  
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  