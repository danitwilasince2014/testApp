
'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});



/* document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('rental-form');

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    document.getElementById('reset-btn').addEventListener('click', function() {
        form.reset();
    });

    function validateForm() {
        var firstname = document.getElementById('firstname').value.trim();
        var lastname = document.getElementById('lastname').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var car = document.getElementById('car').value;
        var days = document.getElementById('days').value.trim();
        var errorMessage = document.getElementById('error-message');

        errorMessage.textContent = '';

        if (firstname === '') {
            errorMessage.textContent = 'Please enter your first name.';
            return false;
        }

        if (lastname === '') {
            errorMessage.textContent = 'Please enter your last name.';
            return false;
        }

        if (email === '') {
            errorMessage.textContent = 'Please enter your email address.';
            return false;
        }

        // Add more validation checks for email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return false;
        }

        if (phone === '') {
            errorMessage.textContent = 'Please enter your phone number.';
            return false;
        }

        // Add more validation checks for phone number format
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            errorMessage.textContent = 'Please enter a valid phone number (10 digits).';
            return false;
        }

        if (car === '') {
            errorMessage.textContent = 'Please select a car to hire.';
            return false;
        }

        if (days === '') {
            errorMessage.textContent = 'Please enter the number of days to hire.';
            return false;
        }

        if (isNaN(days) || parseInt(days) <= 0) {
            errorMessage.textContent = 'Please enter a valid number of days.';
            return false;
        }

        return true;
    }
});
 */