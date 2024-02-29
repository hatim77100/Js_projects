const checkbox = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.classList.remove("transition");
    htmlElement.setAttribute("data-theme", "light");
  }
});
