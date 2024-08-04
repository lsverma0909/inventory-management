// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2jc5rfq2FvJCzlkpF56sjIp1pA9RwgKA",
  authDomain: "inventory-11a30.firebaseapp.com",
  projectId: "inventory-11a30",
  storageBucket: "inventory-11a30.appspot.com",
  messagingSenderId: "283731806473",
  appId: "1:283731806473:web:93dd133e49ef292a526bd8",
  measurementId: "G-Y3P234GRPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}