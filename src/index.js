import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEP29VYol9XqF0XJ7Ta7rqzyZPC0CJdpo",
  authDomain: "coderhouse-ecommerce-4f34a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4f34a",
  storageBucket: "coderhouse-ecommerce-4f34a.appspot.com",
  messagingSenderId: "1092595580992",
  appId: "1:1092595580992:web:b8b8005ea5608f73a19fa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
