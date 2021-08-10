  // Your web app's Firebase configuration
  import firebase from 'firebase/app'
  import 'firebase/firestore' 
  var firebaseConfig = {
      apiKey: "AIzaSyDjEgMGvowUsAs0EzxVRWuDmkGyYTsuvVQ",
      authDomain: "fb-crud-re-act.firebaseapp.com",
      projectId: "fb-crud-re-act",
      storageBucket: "fb-crud-re-act.appspot.com",
      messagingSenderId: "642033889307",
      appId: "1:642033889307:web:86e0fab9826856c3ac88be"
  };
    // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig); 
  
  export const db = fb.firestore();