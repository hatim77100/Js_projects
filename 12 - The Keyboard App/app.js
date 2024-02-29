const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");
// console.log(keyContainers);
// console.log(keyContainers[0]);
console.log(keyContainers[0].children[0].value);

keyContainers.forEach(function (key) {
  key.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target.value);
    // console.log(e.path[0]);
    // console.log(e.path[0].value);
    // console.log(e.path[0].value.toLowerCase());

    if (!e.target.value) return;

    let keyClicked = e.target.value;
    textArea.value += keyClicked;
  });
});
