const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirm-password");

let password;
let confirmPassword;

inputPassword.addEventListener("keyup", () => {
  password = inputPassword.value;
});

inputConfirmPassword.addEventListener("keyup", () => {
  confirmPassword = inputConfirmPassword.value;
  confirmPassword === password
    ? (inputConfirmPassword.classList.add("validated"),
      inputConfirmPassword.classList.remove("input-validation"))
    : (inputConfirmPassword.classList.remove("validated"),
      inputConfirmPassword.classList.add("input-validation"));
});
