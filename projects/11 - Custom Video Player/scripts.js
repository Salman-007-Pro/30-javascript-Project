const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const button = player.querySelector(".toggle");
const progressbar = player.querySelector(".progress__filled");
const progress = player.querySelector(".progress");
const skipButton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll("input[type=range]");

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}
function updateButton() {
  button.textContent = this.paused ? "►" : "⏸️";
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressbar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  s;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
button.addEventListener("click", togglePlay);

skipButton.forEach((btn) => btn.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
