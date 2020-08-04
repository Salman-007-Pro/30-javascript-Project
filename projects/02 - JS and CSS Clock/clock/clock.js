const hourHand = document.querySelector(".hour-arm");
const minuteHand = document.querySelector(".min-arm");
const secondHand = document.querySelector(".sec-arm");

const now = new Date();
let sumSec = now.getSeconds() * 6;
// let sumMin=now.getMinutes()*6;
// let sumhr=(now.getHours()%12)*30;
function setTime() {
  const now = new Date();
  sumSec += 6;
  const secondsDegrees = `${sumSec}deg`;
  secondHand.style.transform = `translate(-50%,-50%) rotate(${secondsDegrees})`;

  const minutesDegrees = `${now.getMinutes() * 6}deg`;
  minuteHand.style.transform = `translate(-50%,-50%) rotate(${minutesDegrees})`;

  const hoursDegrees = `${(now.getHours() % 12) * 30}deg`;
  hourHand.style.transform = `translate(-50%,-50%) rotate(${hoursDegrees})`;
}
setInterval(setTime, 1000);
