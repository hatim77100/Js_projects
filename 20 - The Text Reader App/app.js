const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

let currentChar;
// Reading functionality

readBtn.addEventListener("click", function () {
  readText(textDisplay.value);
});

// Pausing functionality
pauseBtn.addEventListener("click", pauseText);

// stop reading functionality
stopBtn.addEventListener("click", stopRead);

// Speed functionality
speedBtn.addEventListener("input", function () {
  stopText();
  readText(utterance.text.substring(currentChar));
});

utterance.addEventListener("boundary", function (e) {
  currentChar = e.charIndex;
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", function () {
  textDisplay.disabled = false;
});

// Read text
function readText(textReading) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }

  if (speechSynthesis.speaking) return;
  utterance.text = textReading;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}

// Pause text
function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

// stop read
function stopRead() {
  speechSynthesis.cancel();
  speechSynthesis.resume();
}
