const menuToggle = document.querySelector("#menu");
const mainMenu = document.querySelector(".nav ul");
const nav = document.querySelector(".nav");
const navItemContainer = document.querySelector("#nav-item-container");

menuToggle.addEventListener("click", function() {
    mainMenu.classList.toggle("hidden");
    nav.classList.toggle("bg-aoit-700");
    nav.classList.toggle("h-full");

    navItemContainer.classList.toggle("text-white");
})
