// Aethele Official - Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Contact form
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Thank you for contacting Aethele Official! We will get back to you soon.");

            contactForm.reset();
        });
    }

});
