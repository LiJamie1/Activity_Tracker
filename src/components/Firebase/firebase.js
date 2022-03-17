import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "workout-tracker-4ab41.firebaseapp.com",
  projectId: "workout-tracker-4ab41",
  storageBucket: "workout-tracker-4ab41.appspot.com",
  messagingSenderId: "1056210939386",
  appId: "1:1056210939386:web:8c386cf2f8e8be18d38843",
  measurementId: "G-30HHZGPJXM",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }
  // Authentication
  doCreateUser = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignIn = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => {
    this.auth.signOut();
  };

  doPasswordReset = (email) => {
    this.auth.sendPasswordResetEmail(email);
  };
}

export default Firebase;
