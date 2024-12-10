import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzEvLx3leIeKhkQL-AFiCs6_mleFb3irs",
  authDomain: "jevictecnology.firebaseapp.com",
  projectId: "jevictecnology",
  storageBucket: "jevictecnology.firebasestorage.app",
  messagingSenderId: "749972278673",
  appId: "1:749972278673:web:6cf6333f680d7d9aca9e30",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
