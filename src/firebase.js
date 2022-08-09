import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHk2K8lNTp6Zs8M0rvOcZcnOoiYF6uqNw",
  authDomain: "twitter-clone-36af7.firebaseapp.com",
  projectId: "twitter-clone-36af7",
  storageBucket: "twitter-clone-36af7.appspot.com",
  messagingSenderId: "253174599059",
  appId: "1:253174599059:web:ed7ebf7abdeb0b35e2ec66",
  measurementId: "G-QBSJK2J434"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line
firebase.analytics();

const db = firebase.firestore();

export default db;