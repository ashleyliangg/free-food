// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8le71ZD-VXnrtSES89GG02f_cKkHwbgY",
  authDomain: "free-food-2b96f.firebaseapp.com",
  projectId: "free-food-2b96f",
  storageBucket: "free-food-2b96f.appspot.com",
  messagingSenderId: "430950225726",
  appId: "1:430950225726:web:848a90d925db65643abe6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);