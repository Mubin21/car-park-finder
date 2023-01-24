// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAxbpwc6ki0mBHEBDSEGfhZy5ucu76Uks",
  authDomain: "park-finder-92915.firebaseapp.com",
  projectId: "park-finder-92915",
  storageBucket: "park-finder-92915.appspot.com",
  messagingSenderId: "916384633014",
  appId: "1:916384633014:web:65042e79eaf67061c51617",
  measurementId: "G-LK2RR0ZKZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;