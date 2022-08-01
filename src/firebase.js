
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBpjr88qJoOlIpxiztCFoGnrZz8a8nE6Gg",
    authDomain: "disneyplus-clone-a9f80.firebaseapp.com",
    projectId: "disneyplus-clone-a9f80",
    storageBucket: "disneyplus-clone-a9f80.appspot.com",
    messagingSenderId: "488544875182",
    appId: "1:488544875182:web:e520d7439172ddde69333f",
    measurementId: "G-X72XN1L9ZL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export  { auth, provider, storage }
  export default db;