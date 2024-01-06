// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXW9zHyvk5EM7uCrNGVrnVqf04hMv3Omc",
  authDomain: "vite-contact2-33636.firebaseapp.com",
  projectId: "vite-contact2-33636",
  storageBucket: "vite-contact2-33636.appspot.com",
  messagingSenderId: "267318816565",
  appId: "1:267318816565:web:aadbe9ed131b486931a67c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);