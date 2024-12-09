const displayBurgerMenu = document.querySelector(".burger-container");
const burgerMenuIcon = document.querySelector(".burger-btn");
const closeMenuIcon = document.querySelector('.close-btn')

burgerMenuIcon.addEventListener("click", () => {
  if (displayBurgerMenu.classList.contains("hidden")) {
    displayBurgerMenu.classList.remove("hidden");
  }
});

closeMenuIcon.addEventListener('click', () => {
  if (displayBurgerMenu.classList.contains("burger-container")) {
    displayBurgerMenu.classList.add("hidden");
  }
})


