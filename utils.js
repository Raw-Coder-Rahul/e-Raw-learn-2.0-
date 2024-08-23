document.addEventListener("DOMContentLoaded", function () {
    const togglebtn = document.querySelector('.toggle_btn');
    const togglebtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    togglebtn.addEventListener('click', function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        togglebtnIcon.className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
    });

    // Handle dropdown and submenu display
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.addEventListener('mouseover', function () {
            const submenu = this.querySelector('.dropdown-submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });
        dropdown.addEventListener('mouseout', function () {
            const submenu = this.querySelector('.dropdown-submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });

    // Handle search functionality
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');

    if (searchIcon) {
        searchIcon.addEventListener('click', function () {
            searchContainer.classList.toggle('open');
        });
    }

    function searchContent() {
        let query = document.getElementById('search-bar').value.trim();
        if (query) {
            window.location.href = `search_results.html?query=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search term.");
        }
    }

    const searchButton = document.getElementById('search-button');

    if (searchButton) {
        searchButton.addEventListener('click', searchContent);
    }
});
