const navOpen = document.querySelector(".fa-bars");
const navbar = document.getElementById("navbar");
const navClose = document.querySelector(".fa-xmark");
const pages = document.querySelectorAll(".page");
const boxes = document.querySelectorAll("box");

navOpen.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

navClose.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

pages.forEach(page => {
    page.addEventListener("click", () => {
        page.classList.contains(1)
    })
})

