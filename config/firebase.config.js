// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "urgentcash-ee307.firebaseapp.com",
  projectId: "urgentcash-ee307",
  storageBucket: "urgentcash-ee307.firebasestorage.app",
  messagingSenderId: "81933170937",
  appId: "1:81933170937:web:0676c8bc04f7d9da2c0a28"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage}