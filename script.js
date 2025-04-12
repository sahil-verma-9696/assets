function watch() {
  const watchElem = document.querySelector(".watch");
  function updateDOM(time) {
    watchElem.textContent = time;
  }

  setInterval(function () {
    updateDOM(new Date().toLocaleTimeString());
  }, 1000);
}
watch();

function toggleModes() {
  const Theme = Object.freeze({
    DARK: "dark",
    LIGHT: "light",
    SYSTEM: "system",
  });

  const dark = document.querySelector("#dark");
  const light = document.querySelector("#light");
  const system = document.querySelector("#system");

  const buttons = [dark, light, system];

  function setActive(button) {
    buttons.forEach((btn) => btn.classList.remove("active-elem"));
    button.classList.add("active-elem");
  }

  function applyTheme(theme) {
    switch (theme) {
      case Theme.DARK:
        document.body.classList.add("dark-mode");
        setActive(dark);
        break;
      case Theme.LIGHT:
        document.body.classList.remove("dark-mode");
        setActive(light);
        break;
      case Theme.SYSTEM:
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.body.classList.toggle("dark-mode", prefersDark);
        setActive(system);
        break;
    }
    localStorage.setItem("theme", theme);
  }

  dark.addEventListener("click", () => applyTheme(Theme.DARK));
  light.addEventListener("click", () => applyTheme(Theme.LIGHT));
  system.addEventListener("click", () => applyTheme(Theme.SYSTEM));

  // Apply saved theme on load
  const saved = localStorage.getItem("theme") || Theme.SYSTEM;
  applyTheme(saved);
}
// toggleModes();

async function getFiles() {
  const response = await fetch("images-files.json");
  const files = await response.json();
  console.log(files);

  const images = document.querySelectorAll("img");

  const main = document.querySelector("main");

  files.forEach((path) => {
    const img = document.createElement("img");
    img.src = path;
    img.alt = path.split("/").pop();
    main.appendChild(img);
    console.log(img);
  });
}
// getFiles();

// Get-ChildItem -Path .\images -Recurse -File | ForEach-Object { $_.FullName.Replace((Get-Location).Path + "\", "") } | ConvertTo-Json -Compress | Set-Content data.json
