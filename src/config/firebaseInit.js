// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuk9fkRcZz6DnPm7CCJ1nQ47IXBf3Q-MQ",
  authDomain: "busybuy-548f3.firebaseapp.com",
  projectId: "busybuy-548f3",
  storageBucket: "busybuy-548f3.appspot.com",
  messagingSenderId: "1059018591312",
  appId: "1:1059018591312:web:02b002f095cba515b29555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase instance
const firebaseAuth=getAuth(app);

//initialize firestore db and get a reference to that service
const db = getFirestore(app);

//instance of google auth provider
const googleProvider=new GoogleAuthProvider();

export {db,firebaseAuth,googleProvider};
