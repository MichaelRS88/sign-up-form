document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Event listener to check if the password fields match
    signupForm.addEventListener("submit", function (e) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault(); // Prevent form submission
            passwordInput.classList.add("error");
            confirmPasswordInput.classList.add("error");
            alert("Passwords do not match. Please try again.");
        }
    });
});
