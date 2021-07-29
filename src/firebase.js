import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAZt-IzgcHWP5fe_QPskbt-uBlP3N8oJuE",
    authDomain: "proyectoalqueria-f0c9e.firebaseapp.com",
    projectId: "proyectoalqueria-f0c9e",
    storageBucket: "proyectoalqueria-f0c9e.appspot.com",
    messagingSenderId: "945415014359",
    appId: "1:945415014359:web:ce632616a727f0da2c2d92"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  
  export const db = fb.firestore();
