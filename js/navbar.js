const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
    });
});

function updateNavbar() { 
    navbar.classList.toggle("scrolled", window.scrollY > 40);

    let current = navLinks[0];

    navLinks.forEach(function (link) {
        const section = document.querySelector(link.getAttribute("href"));

        if (section && section.getBoundingClientRect().top <= 120) {
            current = link;
        }
    });

    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (atBottom) {
        current = document.querySelector('.nav-links a[href="#reviews"]');
    }

    navLinks.forEach(function (link) {
        link.classList.toggle("active", link === current);
    });
}

window.addEventListener("scroll", updateNavbar);
updateNavbar();