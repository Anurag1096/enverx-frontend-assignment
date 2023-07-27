
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ruBWcSBtT37Pw54vPqyRTqKs0QWlIgo",
  authDomain: "expensedata-10b96.firebaseapp.com",
  projectId: "expensedata-10b96",
  storageBucket: "expensedata-10b96.appspot.com",
  messagingSenderId: "425126107593",
  appId: "1:425126107593:web:993752cfcd96f59b70b018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);   