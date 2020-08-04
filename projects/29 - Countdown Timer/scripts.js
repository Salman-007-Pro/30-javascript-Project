const displayTimer = document.querySelector(".display__time-left");
const displayEndTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let countTimer;
function timer(seconds) {
  clearInterval(countTimer);
  const now = Date.now();
  const timer = now + seconds * 1000;
  displayTimes(seconds);
  displayEndTimes(timer);
  countTimer = setInterval(() => {
    const leftTime = Math.floor((timer - Date.now()) / 1000);
    if (leftTime < 0) {
      clearInterval(countTimer);
      return;
    }
    displayTimes(leftTime);
  }, 1000);
}
function displayTimes(seconds) {
  const hours = Math.floor(seconds / 3600);
  let leftSeconds = seconds % 3600;
  const minutes = Math.floor(leftSeconds / 60);
  leftSeconds = leftSeconds % 60;
  const display = `${hours > 12 ? hours - 12 : hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${leftSeconds < 10 ? "0" : ""}${leftSeconds}`;
  displayTimer.textContent = display;
  document.title = display;
}
function displayEndTimes(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour % 12 || 12;
  const AmOrPm = hour >= 12 ? "PM" : "AM";
  const minutes = end.getMinutes();
  const seconds = end.getSeconds();
  displayEndTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${AmOrPm}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
