// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCavMGb7gu73OwQYRUGXvk1evc635OFHI8",
  authDomain: "runllm-blog.firebaseapp.com",
  projectId: "runllm-blog",
  storageBucket: "runllm-blog.appspot.com",
  messagingSenderId: "477852660643",
  appId: "1:477852660643:web:c89d7ad11bd3d57e946016",
  measurementId: "G-29V2KQ4SKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;