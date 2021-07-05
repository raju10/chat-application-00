import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAH-3JrMMTgm4pijhjYiuhFCOlYs-dMMls",
    authDomain: "chat-application-00.firebaseapp.com",
    projectId: "chat-application-00",
    storageBucket: "chat-application-00.appspot.com",
    messagingSenderId: "83941260564",
    appId: "1:83941260564:web:fdb0d843083e7cdeb91601",
  })
  .auth();
