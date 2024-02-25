new WOW().init();
// navigation bar
window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("navigation__moving", window.scrollY > 0)
})

const menu = this.document.querySelector(".navbar__menu");
const menuBtn = this.document.querySelector(".navbar__menu-btn");
const closeBtn = this.document.querySelector(".navbar__close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add('navbar__btn-active')
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('navbar__btn-active')
})


// active navbar

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll(".navbar__item");

let currentSection = 'hero';
let contectSection = 'contact'.toLowerCase();
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let secName = sec.id.toLowerCase();
        if (window.scrollY >= (sec.offsetTop - 200)) {
            currentSection = sec.id;
        }

    });

    navLinks.forEach(nav => {
        if (nav.href.includes(currentSection)) {
            document.querySelector('.navbar__item--active').classList.remove('navbar__item--active')
            nav.classList.add('navbar__item--active');
        }
    });
});




// typewritter
var typed = new Typed(".auto-type", {
    strings: ["Front end developer", "Back end developer", "Full stack developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true

})