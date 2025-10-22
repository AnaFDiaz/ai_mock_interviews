import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "prepwise-4f785.firebaseapp.com",
  projectId: "prepwise-4f785",
  storageBucket: "prepwise-4f785.firebasestorage.app",
  messagingSenderId: "1053457186031",
  appId: "1:1053457186031:web:0974890e21fe665371ef1a",
  measurementId: "G-X0T075DZYV"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);