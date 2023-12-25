let count = 0;

/** Initialize Data */
window.onload = () => initializeData();

function initializeData() {
  initializeTheme();
  initializeCount();
}

function initializeTheme() {
  if (!localStorage.getItem("theme")) return setTheme("dark");

  setTheme(localStorage.getItem("theme"));
}

function initializeCount() {
  if (!localStorage.getItem("count")) return setCount(0);

  count = localStorage.getItem("count");
  setCount(count);
}

/** Main */
function addCount() {
  count++;
  setCount(count);
}

function resetCount() {
  count = 0;
  setCount(count);
}

function setCount(count) {
  localStorage.setItem("count", count);
  fillCountView(count);
}

function fillCountView(value) {
  document.querySelector("#count-view").innerText = value;
}

/** Theme */
function toggleTheme() {
  const html = document.querySelector("html")
  const theme = html.getAttribute("data-theme");

  if (theme === "light") return setTheme("dark");

  setTheme("light");
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.querySelector("html").setAttribute("data-theme", theme);

  const themeToggler = document.querySelector("#theme-toggler");

  if (theme === "dark") {
    themeToggler.classList.remove("bi-moon");
    themeToggler.classList.add("bi-sun");

    return;
  }

  themeToggler.classList.add("bi-moon");
  themeToggler.classList.remove("bi-sun");
}

/** PWA */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function (err) {
      console.log(err);
    });
}