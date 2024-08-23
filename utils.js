document.addEventListener("DOMContentLoaded", function () {
    const togglebtn = document.querySelector('.toggle_btn');
    const togglebtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    togglebtn.addEventListener('click', function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        togglebtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
    
    const button = document.querySelector(".button-49");

    button.addEventListener("click", function () {
        this.textContent = "Clicked!";
        setTimeout(() => {
            this.textContent = "ALTERNATE TEXT";
        }, 1000);
    });

    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');

    searchIcon.addEventListener('click', function () {
        searchContainer.classList.toggle('open');
    });

    function searchContent() {
        let query = document.getElementById('search-bar').value.trim();
        if (query) {
            window.location.href = `search_results.html?query=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search term.");
        }
    }
});
