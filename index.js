const $landingPage = document.querySelector(".landing-page");
const $mainPage = document.querySelector("main");
const $enterBtn = document.querySelector(".enter-btn");
const audio = new Audio("/src/aespa.mp3");
const $audioBtn = document.querySelector(".audioButton");
let isPlaying = true;

$enterBtn.addEventListener("click", () => {
  $landingPage.classList.add("disappear");
});
$audioBtn.addEventListener("click", handleClickAudio);

function handleClickAudio() {
  if (isPlaying) {
    audio.play();
    isPlaying = false;
  } else {
    audio.pause();
    isPlaying = true;
  }
}
