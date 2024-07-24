// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGYCCVLgdsUfnMjdnrSrzAehNJh-HIcAI",
  authDomain: "react-chat-1a937.firebaseapp.com",
  projectId: "react-chat-1a937",
  storageBucket: "react-chat-1a937.appspot.com",
  messagingSenderId: "635889723808",
  appId: "1:635889723808:web:1c267b747a4963f4481cc5",
  measurementId: "G-014FWHNDNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);