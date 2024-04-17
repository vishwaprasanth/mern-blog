// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a6a89.firebaseapp.com",
  projectId: "mern-blog-a6a89",
  storageBucket: "mern-blog-a6a89.appspot.com",
  messagingSenderId: "1051928588067",
  appId: "1:1051928588067:web:271553834d7015669ee696"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);