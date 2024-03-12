const header = document.querySelector("header");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})
