// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import * as firebase from "firebase/app";
import "firebase/functions";

let firebaseInstance = null;
export const initializeFirebase = () => {
  if (!firebaseInstance) {
    firebaseInstance = firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
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
