// Display burgerMenu
const displayBurgerMenu = document.querySelector(".burger-container");
const burgerMenuIcon = document.querySelector(".burger-btn");
const closeMenuIcon = document.querySelector(".close-btn");

burgerMenuIcon.addEventListener("click", () => {
  if (displayBurgerMenu.classList.contains("hidden")) {
    displayBurgerMenu.classList.remove("hidden");
  }
});

closeMenuIcon.addEventListener("click", () => {
  if (displayBurgerMenu.classList.contains("burger-container")) {
    displayBurgerMenu.classList.add("hidden");
  }
});

// ErrorMessage
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputEmail = document.querySelector(".email");
  const errorMessage = document.querySelector(".error-message");
  const btnSubmit = document.querySelector("button");

  btnSubmit.addEventListener("click", () => {
    if (btnSubmit.click) {
      if (
        inputEmail.value === "" &&
        inputEmail.value === inputEmail.value.toUpperCase()
      ) {
        errorMessage.classList.remove("hidden");
      } else if (inputEmail !== "") {
        errorMessage.classList.add("hidden");
      }
    }
  });
});
