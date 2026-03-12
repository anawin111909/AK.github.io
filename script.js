const revealElements = document.querySelectorAll(".reveal-right");

function revealOnScroll(){

const windowHeight = window.innerHeight;

revealElements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});