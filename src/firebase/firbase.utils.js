import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvdjvvOh1M9IaT87Dccz2GuyoHWvamrhQ",
    authDomain: "crwn-db-4e8b8.firebaseapp.com",
    databaseURL: "https://crwn-db-4e8b8.firebaseio.com",
    projectId: "crwn-db-4e8b8",
    storageBucket: "crwn-db-4e8b8.appspot.com",
    messagingSenderId: "546896340707",
    appId: "1:546896340707:web:da2e7a6f9c1347de82c7d6",
    measurementId: "G-QBTRJ4FBEQ"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;