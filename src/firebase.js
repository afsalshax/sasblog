import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAizPIlXnLKhJtyLU6fPjODSfQ4-DxfZoA",
  authDomain: "blogproject-d5461.firebaseapp.com",
  projectId: "blogproject-d5461",
  storageBucket: "blogproject-d5461.appspot.com",
  messagingSenderId: "1241401260",
  appId: "1:1241401260:web:604cbfd6d4b5ab21861c09"
};

const app = initializeApp(firebaseConfig);

 export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()



