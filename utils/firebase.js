// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import * as firebase from "firebase/app";
import "firebase/functions";

let firebaseInstance = null;
export const initializeFirebase = () => {
  if (!firebaseInstance) {
    firebaseInstance = firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    });
  }
  // If you're using Firebase Emulator, uncomment this code to enable react app use the Emulator
  // if (
  //   window.location.host.includes("localhost") ||
  //   window.location.host.includes("127.0.0.1")
  // ) {
  //   const functions = getFunctions(firebase.getApp());
  //   connectFunctionsEmulator(functions, "localhost", 5001);
  // }
};
export default firebase;
