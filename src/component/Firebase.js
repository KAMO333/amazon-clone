import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa_qHM7QA7gEIY_1HRSff_lgX8N-xLK9w",
  authDomain: "clone-f7791.firebaseapp.com",
  projectId: "clone-f7791",
  storageBucket: "clone-f7791.appspot.com",
  messagingSenderId: "745234608675",
  appId: "1:745234608675:web:145bdcc87ec4bbb269f796",
  measurementId: "G-DXP4S341MB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
