import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyWiK77jZreSZ9ROgZpMMl1E-QAcS_25k",
    authDomain: "facebook-clone-5d23c.firebaseapp.com",
    projectId: "facebook-clone-5d23c",
    storageBucket: "facebook-clone-5d23c.appspot.com",
    messagingSenderId: "634890666178",
    appId: "1:634890666178:web:6bdf741566547cbec83b5b",
    measurementId: "G-ZJWCB1E4T4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db
  
  