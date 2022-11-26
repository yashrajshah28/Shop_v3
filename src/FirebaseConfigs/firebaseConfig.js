// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYR7Vc5gxLWTv08B3jbyE64z4HuZs75fQ",
  authDomain: "shop-v3.firebaseapp.com",
  projectId: "shop-v3",
  storageBucket: "shop-v3.appspot.com",
  messagingSenderId: "471674340532",
  appId: "1:471674340532:web:b60a0a29648aa4262503e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)