// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "findmyland-13d55.firebaseapp.com",
  projectId: "findmyland-13d55",
  storageBucket: "findmyland-13d55.appspot.com",
  messagingSenderId: "598283166510",
  appId: "1:598283166510:web:9d057ca594fea469eb90bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);