const menuToggle = document.querySelector("#menu");
const mainMenu = document.querySelector(".nav ul");

menuToggle.addEventListener("click", function() {
    mainMenu.classList.toggle("hidden");
})
