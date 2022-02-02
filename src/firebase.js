import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//user env files
const firebaseConfig = {
  apiKey: "AIzaSyCJ3ACEfWFUUEu0Sza2juILNVlLhyTWd3E",
  authDomain: "pixo-noids.firebaseapp.com",
  databaseURL: "https://pixo-noids-default-rtdb.firebaseio.com",
  projectId: "pixo-noids",
  storageBucket: "pixo-noids.appspot.com",
  messagingSenderId: "814103856939",
  appId: "1:814103856939:web:104731301a5a0367ca276e",
  measurementId: "G-H4XCWF9KCR",
};

//service intialize
const app = initializeApp(firebaseConfig);
export let userDb = getFirestore(app);
export const userAuth = getAuth(app);
