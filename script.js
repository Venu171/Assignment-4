document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!name || !email || !password || !confirmPassword) {
        alert('All fields are required');
    } else if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else if (!password.match(passwordPattern)) {
        alert('Password must be at least 8 characters long and contain both letters and numbers');
    } else {
        alert('Registration successful');
        history.back();
        // You can submit the form here or perform any other action
    }
});