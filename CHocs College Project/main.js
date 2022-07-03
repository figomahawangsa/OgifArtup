const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
})