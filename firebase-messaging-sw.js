importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  var config = {
    databaseURL: "",
    apiKey: "s",
    authDomain: "",
    databaseURL: "",
    projectId: "",  
    storageBucket: "",  
    messagingSenderId: "",
    appId: ""  
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();