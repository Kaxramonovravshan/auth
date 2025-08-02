import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjVVisIDUUuseP3MyrtWFn2EvPciFqETQ",
  authDomain: "g-73-f5ab8.firebaseapp.com",
  projectId: "g-73-f5ab8",
  storageBucket: "g-73-f5ab8.firebasestorage.app",
  messagingSenderId: "789152463280",
  appId: "1:789152463280:web:ca45d9ecfec15b2ce17e75",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
