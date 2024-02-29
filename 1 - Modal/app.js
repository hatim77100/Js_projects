const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".modal-btn");
console.log(btnOpen);
const para = document.querySelector(".modal-container");
console.log(para);

btnOpen.addEventListener("click", function () {
  para.classList.add("show");
});

btnClose.addEventListener("click", function () {
  para.classList.remove("show");
});
