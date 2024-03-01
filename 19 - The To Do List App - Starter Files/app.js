const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// -------------------------------------------------

// Selecting the icon class names
const checkBtn = "fa-check-circle";
const uncheckBtn = "fa-circle-thin";
const textLineThrough = "line-through";

// To Do Container
// let toDoContainer = [];
// let id = 0;

let toDoContainer, id;
//---------------------------------------------------
let toDaData = localStorage.getItem("to-do-item");
if (toDaData) {
  toDoContainer = JSON.parse(toDaData);
  id = toDoContainer.length;
  loadToDoContainer(toDoContainer);
} else {
  toDoContainer = [];
  id = 0;
}

function loadToDoContainer(array) {
  array.forEach((item) => {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// clear the local storage
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

//----------------------------------------------------
// addTodo function
function addToDo(todo, id, done, trash) {
  if (trash) return;

  const toDoDone = done ? checkBtn : uncheckBtn;
  const toDoLine = done ? textLineThrough : "";
  const item = `<li class="item">
           <i class="fa ${toDoDone} complete" status="complete" id="${id}"></i>
           <p class="text ${toDoLine}" >${todo}</p>
           <i class="fa fa-trash-o delete" status="delete" id="${id}"></i></li> 
  `;
  const itemPosition = "beforeend";
  toDoList.insertAdjacentHTML(itemPosition, item);
}

// Adding a to-do the list when the enter key is pressed
document.addEventListener("keyup", displayToDo);

// Adding a to-do the list when the + icon is clicked
toDoAddBtn.addEventListener("click", displayToDo);

// displayToDo function
function displayToDo(event) {
  if (
    event.key === "Enter" ||
    event.target.classList.value === "fa fa-plus-circle"
  ) {
    const toDo = toDoInput.value;
    // checking whether the input field is NOT empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      toDoContainer.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      // Persisting and updating the local storage
      localStorage.setItem("to-do-item", JSON.stringify(toDoContainer));

      id++;
    }
    toDoInput.value = "";
  }
}

// when To Do is completed
function completeToDo(toDoItem) {
  toDoItem.classList.toggle(checkBtn);
  toDoItem.classList.toggle(uncheckBtn);
  toDoItem.parentNode.querySelector(".text").classList.toggle(textLineThrough);

  toDoContainer[toDoItem.id].done = toDoContainer[toDoItem.id].done
    ? false
    : true;
}

// When to do is remove
function deleteToDo(toDoItem) {
  toDoItem.parentNode.parentNode.removeChild(toDoItem.parentNode);
  toDoContainer[toDoItem.id].trash = true;
  console.log(toDoItem.parentNode);
}

// targetting To Do items
toDoList.addEventListener("click", function (e) {
  const toDoItem = e.target;
  const toDostatus = toDoItem.attributes.status?.value;
  console.log(toDostatus);

  if (toDostatus === "complete") {
    completeToDo(toDoItem);
  } else if (toDostatus === "delete") {
    deleteToDo(toDoItem);
  }

  localStorage.setItem("to-do-item", JSON.stringify(toDoContainer));
});
