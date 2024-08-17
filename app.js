// Modal Handling
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Image Slider
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    slides.forEach((slide, index) => {
        slide.style.display = "none";  
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }
    
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
    });

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

// Navbar Button Hover Effect
const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
        this.style.color = "#FF013C";
    });

    link.addEventListener("mouseout", function() {
        this.style.color = "#002765";
    });
});

// Dynamic Button Text and Effect
const button = document.querySelector(".button-49");

button.addEventListener("click", function() {
    this.textContent = "Clicked!";
    setTimeout(() => {
        this.textContent = "ALTERNATE TEXT";
    }, 1000);
});
