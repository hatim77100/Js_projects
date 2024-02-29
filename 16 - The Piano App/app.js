const WHITE_KEYS = ["d", "f", "g", "h", "j", "k", "l"];
const BLACK_KEYS = ["r", "t", "y", "u", "i"];

const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

keys.forEach(function (key) {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  // console.log(key.dataset);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", function () {
    key.classList.remove("active");
  });
}

document.addEventListener("keydown", function (e) {
  let key = e.key;
  let whiteKeyIndex = WHITE_KEYS.indexOf(key);
  let blackKeyIndex = BLACK_KEYS.indexOf(key);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});
