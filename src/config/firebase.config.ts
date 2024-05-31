import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz6PDvuNGWWDz1ui7Vmu_JrDQljcIf3Xc",
  authDomain: "club-ecommerce-2e6c9.firebaseapp.com",
  projectId: "club-ecommerce-2e6c9",
  storageBucket: "club-ecommerce-2e6c9.appspot.com",
  messagingSenderId: "792768307715",
  appId: "1:792768307715:web:8aab6bbba670ee0755a436",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
