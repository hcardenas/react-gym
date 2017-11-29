import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDhvVfvQFFykgd_vms-ortZcKTBm1PjAuU",
    authDomain: "react-gym-ae92c.firebaseapp.com",
    databaseURL: "https://react-gym-ae92c.firebaseio.com",
    projectId: "react-gym-ae92c",
    storageBucket: "",
    messagingSenderId: "946508433089"
  };
  
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

