const modal = document.querySelector(".modal");
const modalDemoBtn = document.querySelector("#modal-demo-btn");
const btnToCloseModal = document.querySelector("#modal-close");

let timerForModal;

const showModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
};

modalDemoBtn.addEventListener("click", showModal);
btnToCloseModal.addEventListener("click", closeModal);
