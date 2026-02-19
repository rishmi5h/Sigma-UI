const modalOpenBtns = document.querySelectorAll("[data-modal-open]");
const modalCloseBtns = document.querySelectorAll("[data-modal-close]");
const modalOverlays = document.querySelectorAll(".modal-overlay");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal-open");
    const modal = document.querySelector(modalId);
    if (modal) modal.classList.add("active");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const overlay = btn.closest(".modal-overlay");
    if (overlay) overlay.classList.remove("active");
  });
});

modalOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
});
