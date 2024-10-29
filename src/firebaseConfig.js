// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyLFJCTl25cLm3oiXKL-Oz2LyEtoK0F1s",
  authDomain: "register-1c2b4.firebaseapp.com",
  projectId: "register-1c2b4",
  storageBucket: "register-1c2b4.appspot.com",
  messagingSenderId: "6199115305",
  appId: "1:6199115305:web:f994176d8541d14a90e638",
  measurementId: "G-V4CB2LL0CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);