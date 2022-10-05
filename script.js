const navOpen = document.querySelector(".fa-bars");
const navbar = document.getElementById("navbar");
const navClose = document.querySelector(".fa-xmark");

navOpen.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

navClose.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

