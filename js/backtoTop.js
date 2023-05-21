// Check scroll position and toggle visibility of "Back to Top" button
function toggleBackToTopButton() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 0) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Scroll smoothly to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener to toggle button visibility
window.addEventListener('scroll', toggleBackToTopButton);

// Add page load event listener to show/hide the button on page change
window.addEventListener('load', toggleBackToTopButton);
