// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXqNZjIQdXouHAz9aSVV9W-SonEi1_yog",
  authDomain: "react-auth-integration-240ef.firebaseapp.com",
  projectId: "react-auth-integration-240ef",
  storageBucket: "react-auth-integration-240ef.firebasestorage.app",
  messagingSenderId: "669539094202",
  appId: "1:669539094202:web:600d48d14fc499cd1d7c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);