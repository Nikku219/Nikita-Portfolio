// NAVBAR TOGGLE // 

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// TYPEWRITER EFFECT // 

const slideText = document.getElementById("slide-text");

const roles = [
    "Aspiring Frontend Developer",
    "MCA Graduate"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    if (!slideText) return;

    const current = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    slideText.textContent = current.substring(0, charIndex);

    if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(typeWriter, 1200);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeWriter, deleting ? 60 : 100);
}

typeWriter();

// ACTIVE NAVBAR // 

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// SCROLL REVEAL // 

const cards = document.querySelectorAll(
    ".project-card,.education-card,.about-box"
);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s ease";
});

function revealCards() {

    cards.forEach(card => {

        if (card.getBoundingClientRect().top < window.innerHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

}

window.addEventListener("scroll", revealCards);
revealCards();

// BUTTON HOVER // 

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });

});

// SMOOTH SCROLL // 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });

            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        }

    });

});

// CURRENT YEAR // 

const year = document.querySelector(".footer p:last-child");

if (year) {
    year.innerHTML =
        `© ${new Date().getFullYear()} Nikita Solanki | All Rights Reserved`;
}

// MOBILE MENU CLOSE AFTER CLICK // 

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (navLinks.classList.contains("active")) {

      navLinks.classList.remove("active");

    }

  });

});

// SOCIAL ICON HOVER // 

document.querySelectorAll(".socials a").forEach(icon => {

  icon.addEventListener("mouseenter", () => {

    icon.style.transform = "translateY(-5px) scale(1.1)";
    icon.style.boxShadow = "0 0 20px #1ea2ff";

  });

  icon.addEventListener("mouseleave", () => {

    icon.style.transform = "translateY(0) scale(1)";
    icon.style.boxShadow = "none";

  });

});

// CONSOLE MESSAGE // 

console.log("Portfolio Loaded Successfully 🚀");

