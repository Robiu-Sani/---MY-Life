// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxUCZiki7UJUQ2AoNW7Q9WU9Ongpmo1yw",
  authDomain: "mylife-6e96b.firebaseapp.com",
  projectId: "mylife-6e96b",
  storageBucket: "mylife-6e96b.appspot.com",
  messagingSenderId: "254261729753",
  appId: "1:254261729753:web:3d6731f5dad9ac1658a1c8",
  measurementId: "G-YTCWJRGRS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
