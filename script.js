let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
document.getElementById("resetBtn").addEventListener("click", reset);
