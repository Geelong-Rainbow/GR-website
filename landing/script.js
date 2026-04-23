let done = false;
document.querySelector("svg").addEventListener("animationiteration", () => {
  if (done) {
    return;
  }
  done = true;
  window.location.href = "https://geelongrainbow.org.au";
});