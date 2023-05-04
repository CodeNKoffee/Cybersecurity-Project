// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJLeNwKMcDoWcQyhqGarhEFucwPlLtF30",
  authDomain: "cybersecurity-company.firebaseapp.com",
  projectId: "cybersecurity-company",
  storageBucket: "cybersecurity-company.appspot.com",
  messagingSenderId: "494298998591",
  appId: "1:494298998591:web:749b4404a21b99b151958a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();