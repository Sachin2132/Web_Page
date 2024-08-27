import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEj0eB-LxpYBI--kxraYEEeL-9zfwphg",
  authDomain: "loginpage-4b6f8.firebaseapp.com",
  projectId: "loginpage-4b6f8",
  storageBucket: "loginpage-4b6f8.appspot.com",
  messagingSenderId: "904532002765",
  appId: "1:904532002765:web:d340d3781c15affebbe684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Access form and error message elements
const form = document.getElementById('signupForm');
const errorMessage = document.getElementById('error-message');

// Add event listener to the form's submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return; // Stop further execution
    } else {
        errorMessage.textContent = '';
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Account Created...");
            // Optionally, redirect or clear the form here
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessageText = error.message;
            errorMessage.textContent = errorMessageText; // Display Firebase error message
        });
});
