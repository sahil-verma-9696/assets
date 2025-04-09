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
  const zone = document.querySelector(".toggle-modes");
  zone.innerHTML = `<span class="active-elm" id="dark" >🌑</span><span class="activeelem" id="light">💡</span><span class="active-elem" id="system" >💻</span>`;
}
toggleModes();
