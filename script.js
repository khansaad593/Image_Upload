let loggedIn = false;

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    // Implement signup logic here (e.g., send data to backend)
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Implement login logic here (e.g., send data to backend and handle response)
    // On successful login, show upload form
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('uploadForm').classList.remove('hidden');
    loggedIn = true;
}

function upload() {
    if (loggedIn) {
        const image = document.getElementById('imageUpload').files[0];
        // Implement image upload logic here (e.g., send image to backend)
    } else {
        alert('Please login first.');
    }
}