document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
});
