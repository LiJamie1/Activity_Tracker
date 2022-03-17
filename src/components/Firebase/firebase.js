import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

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
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
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
