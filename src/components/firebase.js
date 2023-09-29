// Old import style
// import firebase from 'firebase/app';
// import 'firebase/auth';

// New modular import style
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBHO92ddlDvBpccCBW1EenB1YcKfxL-wek",
    authDomain: "here-hackathon-4c323.firebaseapp.com",
    projectId: "here-hackathon-4c323",
    storageBucket: "here-hackathon-4c323.appspot.com",
    messagingSenderId: "153095438355",
    appId: "1:153095438355:web:7bb4c6b96e08aab6e4bfe6"
    
  };

const app = initializeApp(firebaseConfig);

// Use Firebase Authentication
const auth = getAuth(app);


export {auth};




