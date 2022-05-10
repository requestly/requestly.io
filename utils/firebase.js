// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import * as firebase from "firebase/app";
import "firebase/functions";

let firebaseInstance = null;
export const initializeFirebase = () => {
  if (!firebaseInstance) {
    firebaseInstance = firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
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
