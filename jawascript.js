// BUILDCRAFT WEBSITE JAVASCRIPT


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    });

}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !service || !message) {

            formMessage.textContent = "Please complete all fields.";
            return;

        }

        formMessage.textContent =
            "Thank you, " + name +
            "! Your demo request has been validated.";

        contactForm.reset();

    });

}