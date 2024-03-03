const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");

let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];
  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 50);
    item.addEventListener("dragend", function () {
      setTimeout(() => {
        item.style.display = "block";
        draggedItem = null;
      }, 50);
    });
  });

  for (let c = 0; c < lists.length; c++) {
    const list = lists[c];
    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      list.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    });
    list.addEventListener("dragleave", function () {
      list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
    });
    list.addEventListener("drop", function () {
      list.append(draggedItem);
      list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
    });
  }
}
