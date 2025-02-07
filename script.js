document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            document.getElementById("formMessage").textContent = "All fields are required!";
            document.getElementById("formMessage").style.color = "red";
            return;
        }

        document.getElementById("formMessage").textContent = "Message sent successfully!";
        document.getElementById("formMessage").style.color = "green";

        // Clear form
        document.getElementById("contactForm").reset();
    });
});
