document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        alert("Sign-up successful!");
        form.submit();
    });
});