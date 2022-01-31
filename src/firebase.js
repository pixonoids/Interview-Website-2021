import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//user env files
const firebaseConfig = {};

//service intialize
const app = initializeApp(firebaseConfig);
export let userDb = getFirestore(app);
export const userAuth = getAuth(app);
