const demoToast = document.querySelector("#demo-toast");
const toastDemoBtn = document.querySelector("#demo-btn");
const btnToCloseToast = document.querySelector("#close");

let timerForToast;

const showToast = () => {
  demoToast.style.display = "flex";
  timerForToast = setTimeout(() => {
    demoToast.style.display = "none";
  }, 3000);
};

const closeToast = () => {
  clearTimeout(timerForToast);
  demoToast.style.display = "none";
};

toastDemoBtn.addEventListener("click", showToast);
btnToCloseToast.addEventListener("click", closeToast);
