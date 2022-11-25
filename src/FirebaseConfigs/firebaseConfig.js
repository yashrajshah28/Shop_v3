// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSY-uEoCqR5RrUZwRR-zlBJtTtAMku7xw",
  authDomain: "shopify-439a8.firebaseapp.com",
  databaseURL: "https://shopify-439a8-default-rtdb.firebaseio.com/",
  projectId: "shopify-439a8",
  storageBucket: "shopify-439a8.appspot.com",
  messagingSenderId: "624461810432",
  appId: "1:624461810432:web:29b53171953332269281e5",
  measurementId: "G-8EM5VQ41VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)