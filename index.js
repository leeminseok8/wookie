const $landingPage = document.querySelector(".landing-page");
const $mainPage = document.querySelector("main");
const $enterBtn = document.querySelector(".enter-btn");

$enterBtn.addEventListener("click", () => {
  $landingPage.classList.add("disappear");
});

const $audioContainer = document.querySelector("#audioContainer");
const $audioBtn = document.querySelector(".audioButton");
let isPlaying = true;

$audioBtn.addEventListener("click", handleClick);

function handleClick() {
  if (isPlaying) {
    loadAudio();
    $audioBtn.textContent = `music OFF🔈`;
    isPlaying = false;
  } else {
    stopAudio();
    $audioBtn.textContent = `music ON🔈`;
    isPlaying = true;
  }
}

function playAudio() {
  isPlaying = true;
  $audioContainer.volume = 0.3;
  $audioContainer.loop = true;
  $audioContainer.play();
}

function stopAudio() {
  isPlaying = false;
  $audioContainer.pause();
}

function loadAudio() {
  const $source = document.querySelector("#audioSource");
  $source.src = `./src/aespa.mp3`;
  $audioContainer.load();
  playAudio();
}
