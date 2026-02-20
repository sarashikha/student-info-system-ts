import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR4NMEAQoVb8mu2mK91Zfaygah5Ee6nh8",
  authDomain: "student-info-system-ts.firebaseapp.com",
  projectId: "student-info-system-ts",
  storageBucket: "student-info-system-ts.firebasestorage.app",
  messagingSenderId: "187461321168",
  appId: "1:187461321168:web:15941f0c6bb9e45e9679d5",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);