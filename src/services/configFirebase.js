// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5WTyvGTFBz3kyGeVjisa24miYOeJNtw4",
  authDomain: "heroes-wilson-d5b56.firebaseapp.com",
  projectId: "heroes-wilson-d5b56",
  storageBucket: "heroes-wilson-d5b56.appspot.com",
  messagingSenderId: "751593461525",
  appId: "1:751593461525:web:89aec2c55c5fe89bb27b1c",
  measurementId: "G-2Z5E59XSH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);