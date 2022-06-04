import { getApp, getApps, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with .env.development
const firebaseConfig = {
  apiKey: "AIzaSyBhsX4qVES18x6uaLO3O5i1JJQn6AIO5mc",
  authDomain: "netflix-ef155.firebaseapp.com",
  projectId: "netflix-ef155",
  storageBucket: "netflix-ef155.appspot.com",
  messagingSenderId: "668251771696",
  appId: "1:668251771696:web:9ae6b386fd6a51ccb5eef5",
};
// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, app, auth };

// console.log("showing");
