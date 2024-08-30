import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: your_api_key_here,
  authDomain: your_auth_domain_here,
  projectId: your_project_id,
  storageBucket: your_storage_bucket,
  messagingSenderId: your_messaging_id,
  appId: your_app_id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Access the login button
const loginButton = document.getElementById('login');

// Add event listener to the login button
loginButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Redirect to success page
            window.location.href = 'success.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // Handle errors here
        });
});
