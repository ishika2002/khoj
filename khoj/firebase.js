// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlY36y1_I16FPTU0UHQBHk4FvSIqamxwo",
  authDomain: "khoj-65c23.firebaseapp.com",
  projectId: "khoj-65c23",
  storageBucket: "khoj-65c23.appspot.com",
  messagingSenderId: "427182530082",
  appId: "1:427182530082:web:1fe26b80b0e79c5436b47b",
  measurementId: "G-8P0JBFXFZK",
  databaseURL: "https://khoj-65c23-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app, "gs://khoj-65c23.appspot.com");
// const db = getFirestore();

export { auth, app, database, storage };