const menuToggle = document.querySelector("#menu");
const mainMenu = document.querySelector(".nav ul");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", function() {
    mainMenu.classList.toggle("hidden");
    nav.classList.toggle("bg-aoit-700");
    nav.classList.toggle("h-full");
})
