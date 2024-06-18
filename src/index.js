import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0BHymfuxwJsZ7PasKfVKaw8vKC4u4oiY",
  authDomain: "ingressos-a1eaa.firebaseapp.com",
  projectId: "ingressos-a1eaa",
  storageBucket: "ingressos-a1eaa.appspot.com",
  messagingSenderId: "1046185211598",
  appId: "1:1046185211598:web:33396240945c805d9d429f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const auth = firebaseAuth.initializeAuth(app);
// firebaseAuth.signInWithEmailAndPassword(
//   auth, 'renaniomes10@gmail.com', 'renan123'
// ).then(user => console.log(user)).catch(error => console.log('error',error));

export const auth = getAuth(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
