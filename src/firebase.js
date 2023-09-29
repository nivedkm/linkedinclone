import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVpbNyesw--Se5DDv1MhO73dz6W5TL0FY",
    authDomain: "linkedinclone-76db6.firebaseapp.com",
    projectId: "linkedinclone-76db6",
    storageBucket: "linkedinclone-76db6.appspot.com",
    messagingSenderId: "7841484026",
    appId: "1:7841484026:web:f92c1ed4efdf8cd0f24d43"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };
  