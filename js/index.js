// Toggle navbar collapse
function toggleNavbar() {
    const navbarCollapse = document.getElementById("navbarCollapse");
    navbarCollapse.classList.toggle("show");
}

// Toggle dropdown menu
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// CAROUSEL
window.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.owl-carousel-item');
    if (carouselItems.length > 0) {
        const options = {
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        };
        owlCarousel('.owl-carousel', options);
    }
});

// Owl Carousel implementation
function owlCarousel(selector, options) {
    const carousel = document.querySelector(selector);
    if (carousel) {
        const items = carousel.querySelectorAll('.owl-carousel-item');
        if (items.length > 0) {
            carousel.style.display = 'block';

            items.forEach((item) => {
                item.style.display = 'none';
            });

            let currentItemIndex = 0;
            items[currentItemIndex].style.display = 'block';

            setInterval(() => {
                items[currentItemIndex].style.display = 'none';
                currentItemIndex = (currentItemIndex + 1) % items.length;
                items[currentItemIndex].style.display = 'block';
            }, options.autoplayTimeout);
        }
    }
}
// CAROUSEL END

// SEARCH
window.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearchClick);
    }
});

function handleSearchClick(event) {
    event.preventDefault();
    const keywordInput = document.getElementById('keywordInput');
    const categorySelect = document.getElementById('categorySelect');
    const locationSelect = document.getElementById('locationSelect');

    const keyword = keywordInput.value;
    const category = categorySelect.value;
    const location = locationSelect.value;

    // Perform the search using the keyword, category, and location values
    // Implement your search logic here
    console.log('Performing search:');
    console.log('Keyword:', keyword);
    console.log('Category:', category);
    console.log('Location:', location);
}
// SEARCH END


// CATEGORY
window.addEventListener('DOMContentLoaded', function () {
    var categoryItems = document.querySelectorAll('.cat-item');
    categoryItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            // Add your logic for handling category item click here
            console.log('Clicked category item:', item.textContent.trim());
        });
    });
});
// CATEGORY END


// TESTIMONIAL
// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the testimonial carousel
    var carousel = document.querySelector('#testimonial-carousel');
    new OwlCarousel(carousel, {
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

// TESTIMONIAL END  