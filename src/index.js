import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCqxlYsYz4mhLDEUTYh4kbW7Ye-Oz0Kaho",
  authDomain: "reactfinalproject-b88e9.firebaseapp.com",
  databaseURL: "https://reactfinalproject-b88e9.firebaseio.com",
  projectId: "reactfinalproject-b88e9",
  storageBucket: "reactfinalproject-b88e9.appspot.com",
  messagingSenderId: "1066722378585",
  appId: "1:1066722378585:web:a4114e84d9623a06fc0248"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
