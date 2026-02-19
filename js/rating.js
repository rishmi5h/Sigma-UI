const ratingContainers = document.querySelectorAll(".rating:not(.rating-readonly)");

ratingContainers.forEach((container) => {
  const stars = container.querySelectorAll("i");
  const valueDisplay = container.querySelector(".rating-value");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.remove("fa-regular");
          s.classList.add("fas", "active");
        } else {
          s.classList.remove("fas", "active");
          s.classList.add("fa-regular");
        }
      });
      if (valueDisplay) valueDisplay.textContent = index + 1 + "/5";
    });

    star.addEventListener("mouseenter", () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.style.color = "var(--away)";
        } else {
          s.style.color = "";
        }
      });
    });

    star.addEventListener("mouseleave", () => {
      stars.forEach((s) => {
        s.style.color = "";
      });
    });
  });
});
