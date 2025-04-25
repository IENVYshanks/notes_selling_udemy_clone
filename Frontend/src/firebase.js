// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyB2POsPWc-6Ya2nHEV03Xq_wQXT5hjU4HI",
  authDomain: "udemyclone-d5b00.firebaseapp.com",
  projectId: "udemyclone-d5b00",
  storageBucket: "udemyclone-d5b00.appspot.com",
  messagingSenderId: "841894058424",
  appId: "1:841894058424:web:599acb8869d249e9ca574d",
  measurementId: "G-X4J3SJ376H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);