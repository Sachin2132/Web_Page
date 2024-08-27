import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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
