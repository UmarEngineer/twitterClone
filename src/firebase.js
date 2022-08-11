import firebase from "firebase/compat/app";
import "firebase/database";
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'

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

// import firebase from 'firebase/app';
// // import 'firebase/compat/auth';
// import { getStorage } from "firebase/storage";
// // import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyDHk2K8lNTp6Zs8M0rvOcZcnOoiYF6uqNw",
//   authDomain: "twitter-clone-36af7.firebaseapp.com",
//   projectId: "twitter-clone-36af7",
//   storageBucket: "twitter-clone-36af7.appspot.com",
//   messagingSenderId: "253174599059",
//   appId: "1:253174599059:web:ed7ebf7abdeb0b35e2ec66",
//   measurementId: "G-QBSJK2J434"
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// // const auth = firebase.auth();

// export default db;

// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyDHk2K8lNTp6Zs8M0rvOcZcnOoiYF6uqNw",
//   authDomain: "twitter-clone-36af7.firebaseapp.com",
//   projectId: "twitter-clone-36af7",
//   storageBucket: "twitter-clone-36af7.appspot.com",
//   messagingSenderId: "253174599059",
//   appId: "1:253174599059:web:ed7ebf7abdeb0b35e2ec66",
//   measurementId: "G-QBSJK2J434",
//   // storageBucket: ''
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Storage and get a reference to the service
// const db = getStorage(app);

// export default db