document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  let isDarkMode = false;

  themeToggleButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    document.body.style.backgroundColor = isDarkMode ? "#000" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
    themeIcon.src = isDarkMode ? "media/moon.png" : "media/sun.png";
  });
});