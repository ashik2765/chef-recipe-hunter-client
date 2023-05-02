// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4vlpBBTQp5QHZtYAPYFYF5ScXvfqawXU",
  authDomain: "the-tabbakh-project.firebaseapp.com",
  projectId: "the-tabbakh-project",
  storageBucket: "the-tabbakh-project.appspot.com",
  messagingSenderId: "379781630698",
  appId: "1:379781630698:web:616715ceb4449b2ad46593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;