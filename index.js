import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import admin from "firebase-admin";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// import myJson from './firebase-credential.json' assert {type: 'json'};

const firebaseConfig ={
    // credential: admin.credential.cert(myJson),
    databaseURL: "",
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",  
    storageBucket: "",  
    messagingSenderId: "",
    appId: ""  
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
console.log(messaging);
