import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//user env files
const firebaseConfig = {
  apiKey: "AIzaSyAjmAt8XEXvnO5zss9K1xKUNhpILzMRjic",
  authDomain: "login-b7f31.firebaseapp.com",
  projectId: "login-b7f31",
  storageBucket: "login-b7f31.appspot.com",
  messagingSenderId: "926142934820",
  appId: "1:926142934820:web:258c9a327ba8154e2f4db1",
  measurementId: "G-FCMJR3RPT0",
};

//service intialize
const app = initializeApp(firebaseConfig);
export let userDb = getFirestore(app);
export const userAuth = getAuth(app);
