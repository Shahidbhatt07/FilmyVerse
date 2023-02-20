
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD4RuixfYlfw9x2vtqpvrgUjb6GmBnslwE",
  authDomain: "filmyverse-fdf0c.firebaseapp.com",
  projectId: "filmyverse-fdf0c",
  storageBucket: "filmyverse-fdf0c.appspot.com",
  messagingSenderId: "928725557063",
  appId: "1:928725557063:web:17e6e3e33f5118ccf1b662"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, 'movies') 
export const reviewsRef = collection(db, 'reviews') 
export const usersRef = collection(db, 'users') 


export default app;