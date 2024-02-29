let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

// Getting images width
const imgWidth = imgs[0].getBoundingClientRect().width;

// Arranging images next to each other

function setImgPosition(img, index) {
  img.style.left = imgWidth * index + "px";
}

imgs.forEach(setImgPosition);

// moveToImg Function
const moveToImg = function (list, currentImg, moveImg) {
  list.style.transform = "translateX(-" + moveImg.style.left + ")";
  currentImg.classList.remove("current-img");
  moveImg.classList.add("current-img");
};

// Hide/Show Arrows
const hideshowArrows = function (imgs, prevBtn, nextBtn, targetIndex) {
  if (targetIndex === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else if (targetIndex === imgs.length - 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
};

// move images to the left

nextBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const nextImg = currentImg.nextElementSibling;
  const nextIndex = imgs.findIndex((img) => img === nextImg);

  moveToImg(list, currentImg, nextImg);
  hideshowArrows(imgs, prevBtn, nextBtn, nextIndex);
});

// move image to the right

prevBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const prevImg = currentImg.previousElementSibling;
  const prevIndex = imgs.findIndex((img) => img === prevImg);

  moveToImg(list, currentImg, prevImg);
  hideshowArrows(imgs, prevBtn, nextBtn, prevIndex);
});
