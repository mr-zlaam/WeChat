import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZfgxZWV6BuEo-py3kF8-UshDqb8XYgRM",
  authDomain: "wechatio.firebaseapp.com",
  projectId: "wechatio",
  storageBucket: "wechatio.appspot.com",
  messagingSenderId: "516119697056",
  appId: "1:516119697056:web:e98d1fe272e47263f09bc5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authUser = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
