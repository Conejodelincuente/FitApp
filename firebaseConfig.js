import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY1fnYOtl0_-TAAjSv95b3tyhko9qFQSc",
  authDomain: "fitapp-e9699.firebaseapp.com",
  projectId: "fitapp-e9699",
  storageBucket: "fitapp-e9699.firebasestorage.app",
  messagingSenderId: "284407086479",
  appId: "1:284407086479:web:5a329dcd55326019bc9ffa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);