document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("mouseenter", function () {
            this.style.color = "#FF013C";
        });

        link.addEventListener("mouseleave", function () {
            this.style.color = "#002765";
        });
    });
});
