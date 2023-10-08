document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const faqMenu = document.querySelector(".faq-menu");

    menuIcon.addEventListener("click", () => {
        faqMenu.classList.toggle("active");
    });

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            question.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cookiesBanner = document.getElementById("cookies-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    // Function to set a cookie with consent
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    // Check if the user has already accepted cookies
    if (document.cookie.indexOf("cookies_accepted=true") === -1) {
        cookiesBanner.style.display = "block"; // Show the banner

        // Event listener for the "Accept" button
        acceptCookiesButton.addEventListener("click", function () {
            setCookie("cookies_accepted", "true", 365); // Set a cookie with a one-year expiration
            cookiesBanner.style.display = "none"; // Hide the banner
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const queryForm = document.getElementById("queryForm");
    const responseDiv = document.getElementById("response");

    queryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(queryForm);

        // You can handle the form data here, such as sending it to a server using AJAX or performing validation.
        // For this example, we'll display a simple confirmation message.
        responseDiv.innerHTML = "<p>Your query has been submitted. Thank you!</p>";

        // Clear the form after submission (optional)
        queryForm.reset();
    });
});


