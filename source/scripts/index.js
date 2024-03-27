import "./slider";
import "./map";

const burgerButton = document.querySelector(".menu__burger");
const closeButton = document.querySelector(".menu__close");
const burgerList = document.querySelector(".menu__burger-list");

burgerButton.addEventListener("click", () => {
  burgerList.style.display = "flex";
  burgerButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  burgerList.style.display = "none";
  closeButton.style.display = "none";
  burgerButton.style.display = "block";
});
