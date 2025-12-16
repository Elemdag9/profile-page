const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.querySelector(".theme-toggle__label");

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");

  if (isDark) {
    themeLabel.textContent = "Light Mode";
    themeToggle.setAttribute("aria-label", "Switch to Light Mode");
  } else {
    themeLabel.textContent = "Dark Mode";
    themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
  }
}

if (document.body.classList.contains("dark-theme")) {
  themeLabel.textContent = "Light Mode";
} else {
  themeLabel.textContent = "Dark Mode";
}

themeToggle.addEventListener("click", toggleTheme);
