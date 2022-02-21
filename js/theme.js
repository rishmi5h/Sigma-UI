const themeSwitch = document.querySelector(".theme-switch");

function switchTheme(e) {
  var theme = document.documentElement.getAttribute("data-theme");
  if (e.target) {
    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      themeSwitch.classList.remove("fa-sun");
      themeSwitch.classList.add("fa-moon");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeSwitch.classList.remove("fa-moon");
      themeSwitch.classList.add("fa-sun");
    }
  }
}

themeSwitch.addEventListener("click", switchTheme, false);
