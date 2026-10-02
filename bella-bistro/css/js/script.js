document.addEventListener("DOMContentLoaded", function () {
  /* =========================
       MOBILE MENU
    ========================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");

      const isOpen = navLinks.classList.contains("show");

      menuToggle.setAttribute("aria-expanded", isOpen);

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
    });
  }

  /* =========================
       CLOSE MOBILE MENU
    ========================= */

  const links = document.querySelectorAll(".nav-links a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navLinks) {
        navLinks.classList.remove("show");
      }

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");
      }
    });
  });

  /* =========================
       CONTACT FORM VALIDATION
    ========================= */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name");

      const email = document.getElementById("email");

      const message = document.getElementById("message");

      const nameError = document.getElementById("nameError");

      const emailError = document.getElementById("emailError");

      const messageError = document.getElementById("messageError");

      const formSuccess = document.getElementById("formSuccess");

      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      formSuccess.textContent = "";

      let valid = true;

      /* NAME */

      if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";

        valid = false;
      }

      /* EMAIL */

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";

        valid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";

        valid = false;
      }

      /* MESSAGE */

      if (message.value.trim() === "") {
        messageError.textContent = "Please enter your message.";

        valid = false;
      }

      /* SUCCESS */

      if (valid) {
        formSuccess.textContent = "Thank you! Your message has been received.";

        contactForm.reset();
      }
    });
  }
});
