// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOQz_W8-3aN1lQEVLBRfqyT_areU7Iq84",
  authDomain: "prepwise-d246c.firebaseapp.com",
  projectId: "prepwise-d246c",
  storageBucket: "prepwise-d246c.firebasestorage.app",
  messagingSenderId: "400434481117",
  appId: "1:400434481117:web:f1ecd9f2880e1dccd31834",
  measurementId: "G-70HTJ0MBE2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);