// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHvpRV8ZFn75LteUy4Yi_wEyY4fEhNXr0",
  authDomain: "mbs-restaurant.firebaseapp.com",
  projectId: "mbs-restaurant",
  storageBucket: "mbs-restaurant.appspot.com",
  messagingSenderId: "938883658156",
  appId: "1:938883658156:web:531535b1276cd5982e4a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;