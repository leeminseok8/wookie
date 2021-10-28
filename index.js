const $landingPage = document.querySelector(".landing-page");
const $mainPage = document.querySelector("main");
const $enterBtn = document.querySelector(".enter-btn");

const $audio = document.querySelector("#audio");
const $audioBtn = document.querySelector(".audioButton");
let isPlaying = false;

$enterBtn.addEventListener("click", () => {
  $landingPage.classList.add("disappear");
});
$audioBtn.addEventListener("click", togglePlay);

function togglePlay() {
  isPlaying ? $audio.pause() : $audio.play();
}

$audio.onplaying = function () {
  $audioBtn.textContent = "music OFF🔇";
  isPlaying = true;
};

$audio.onpause = function () {
  $audioBtn.textContent = "music ON🔈";
  isPlaying = false;
};
