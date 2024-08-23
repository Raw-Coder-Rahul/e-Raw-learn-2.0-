document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const closeButton = document.querySelector(".close");

    loginButton.addEventListener("click", () => showModal("login"));
    signupButton.addEventListener("click", () => showModal("signup"));

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function showModal(type) {
        modal.style.display = "block";
        if (type === "login") {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("signup-form").style.display = "none";
        } else if (type === "signup") {
            document.getElementById("signup-form").style.display = "block";
            document.getElementById("login-form").style.display = "none";
        }
    }

    function closeModal() {
        modal.style.display = "none";
    }
});
