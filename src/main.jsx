import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyCM_6wHQ3bsdAtiozSJZ_rmgHlZAyCaAEI",
  authDomain: "ecommercewin-21340.firebaseapp.com",
  projectId: "ecommercewin-21340",
  storageBucket: "ecommercewin-21340.appspot.com",
  messagingSenderId: "224245909285",
  appId: "1:224245909285:web:b9518f67e78572143c3ccc"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)