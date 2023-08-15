// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnp9aMCN9hbuzDgL67cGE5f5gD5hBigyY",
  authDomain: "eshopzone-a502f.firebaseapp.com",
  projectId: "eshopzone-a502f",
  storageBucket: "eshopzone-a502f.appspot.com",
  messagingSenderId: "1091278662554",
  appId: "1:1091278662554:web:b76eaf4b5d0fc02c27a823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app