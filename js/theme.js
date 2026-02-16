const themeSwitch = document.querySelector(".theme-switch");

// Load saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    // Default to light theme if no saved preference
    const defaultTheme = "light";
    document.documentElement.setAttribute("data-theme", defaultTheme);
    updateThemeIcon(defaultTheme);
  }
}

// Update the theme icon based on current theme
function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeSwitch.classList.remove("fa-moon");
    themeSwitch.classList.add("fa-sun");
  } else {
    themeSwitch.classList.remove("fa-sun");
    themeSwitch.classList.add("fa-moon");
  }
}

function switchTheme(e) {
  const theme = document.documentElement.getAttribute("data-theme");
  if (e.target) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      updateThemeIcon("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateThemeIcon("dark");
    }
  }
}

// Load theme when page loads
loadTheme();

themeSwitch.addEventListener("click", switchTheme, false);
