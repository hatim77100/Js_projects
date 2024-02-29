const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");

// const x = Math.round(Math.random() * 255);
// const y = Math.round(Math.random() * 255);
// const z = Math.round(Math.random() * 255);
// console.log(x, y, z);

switchBtn.addEventListener("click", function () {
  let color1 = getRandomNum();
  let color2 = getRandomNum();
  let color3 = getRandomNum();

  const colorString = `rgb(${color1},${color2},${color3})`;

  body.style.backgroundColor = colorString;
  switchPara.innerText = colorString;
});
console.log(getRandomNum());

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
