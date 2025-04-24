// src/utils/auth.js
import {
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { auth, googleProvider } from "../firebase";
  
  export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  
  export const signInWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  
  export const signUpWithEmail = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  
  export const logout = () => signOut(auth);
  