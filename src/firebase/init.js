// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeQtoZ5JlReABty-_0bLQ0Z1Df1vl4LSo",
  authDomain: "fir-practice-b64dc.firebaseapp.com",
  projectId: "fir-practice-b64dc",
  storageBucket: "fir-practice-b64dc.firebasestorage.app",
  messagingSenderId: "434444446814",
  appId: "1:434444446814:web:6ad4a40e0a618f8d5958cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()