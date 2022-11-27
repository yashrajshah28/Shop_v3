// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIqMeIH1PD69nlyyYY4pxf9nOjwEsSJzY",
  authDomain: "shoppe-f19b9.firebaseapp.com",
  databaseURL: "https://shoppe-f19b9-default-rtdb.firebaseio.com/",
  projectId: "shoppe-f19b9",
  storageBucket: "shoppe-f19b9.appspot.com",
  messagingSenderId: "865512416278",
  appId: "1:865512416278:web:4204525a77919cea754137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
