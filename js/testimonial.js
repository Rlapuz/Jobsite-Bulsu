document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('testimonial-carousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 3000, // Set the desired interval (in milliseconds) between slides
        slide: true, // Enable smooth sliding transition
        // Other options...
    });
});