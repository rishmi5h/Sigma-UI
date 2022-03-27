// const rating = document.querySelector(".rating");
const rating = document.querySelectorAll(".fa-star");

const superToggle = (element, class0, class1) => {
  element.classList.toggle(class0);
  element.classList.toggle(class1);
};

const clickHandler = (e) => {
  superToggle(e.target, "far", "fas");
};

rating.forEach((item) => item.addEventListener("click", clickHandler));
