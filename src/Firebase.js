import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDseQ82fiM6UTKRMRAi43ugptRa8oN_aGw",
    authDomain: "elitegoods-af585.firebaseapp.com",
    projectId: "elitegoods-af585",
    storageBucket: "elitegoods-af585.appspot.com",
    messagingSenderId: "723434036771",
    appId: "1:723434036771:web:a89aac372da8b4c7671b96",
    measurementId: "G-84FLG0NJMQ"
  };

  initializeApp(firebaseConfig);
  export const db = getFirestore();