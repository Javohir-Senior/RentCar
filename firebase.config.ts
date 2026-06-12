import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAF_cqPrHkR1PVqgWZRAYqSy6TbIv2nnyo",
  authDomain: "internet-magazin-dbb1d.firebaseapp.com",
  projectId: "internet-magazin-dbb1d",
  storageBucket: "internet-magazin-dbb1d.firebasestorage.app",
  messagingSenderId: "334992186027",
  appId: "1:334992186027:web:4bfffc1761b4950aecb5ee",
  measurementId: "G-5117LT6LX8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const data = getDatabase(app);






