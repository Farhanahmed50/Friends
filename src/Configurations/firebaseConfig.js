import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, getDoc, collection, where, doc, setDoc, query, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0KwnFAzQERsDs8hP5m6IAgq7909Qp_3c",
  authDomain: "friends-app-saylani.firebaseapp.com",
  projectId: "friends-app-saylani",
  storageBucket: "friends-app-saylani.appspot.com",
  messagingSenderId: "1000346608278",
  appId: "1:1000346608278:web:62d01445161fd5099218b7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    db,
    getDoc,
    collection,
    where,
    doc,
    setDoc,
    query,
    addDoc,
    getDocs,
    updateProfile
}