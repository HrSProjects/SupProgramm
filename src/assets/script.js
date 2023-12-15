// Get DOM elements
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const save = document.getElementById("save-id");

// Function to toggle the menu
function toggleMenu() {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

// Function to handle scroll events
function handleScroll() {
  const top = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*=${id}]`)
        .classList.add("active");
    }
  });

  header.classList.toggle("sticky", top > 100);
  if (top > 100) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
}

// Scroll Reval
ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .items-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed Js
const typed = new Typed(".multiple-text", {
  strings: ["App!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Add event listeners
menuIcon.addEventListener("click", toggleMenu);
window.addEventListener("scroll", handleScroll);
