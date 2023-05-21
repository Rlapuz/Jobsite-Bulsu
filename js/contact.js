function handleLoginClick() {
    // Perform your AJAX login request here
    // For example:
    fetch('login-url', {
        method: 'POST',
        body: JSON.stringify({ username: 'your-username', password: 'your-password' }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if (response.ok) {
                // Handle successful login response
            } else {
                // Handle failed login response
            }
        })
        .catch(function (error) {
            // Handle error
        });
}

// Smooth scroll effect for breadcrumb links
const breadcrumbLinks = document.querySelectorAll('.breadcrumb-item a');
breadcrumbLinks.forEach(link => {
    link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
        })
        .catch(error => {
            // Handle errors during the request
            console.error(error);
        });
});

