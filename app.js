  
  // Initialize Firebase
  var config = {
    databaseURL: "https://sample-cloudy-default-rtdb.asia-southeast1.firebasedatabase.app",
    apiKey: "AIzaSyCl-SFeYYQmn7R-cxE2iAUuguQHoLsDHcs",
    authDomain: "sample-cloudy.firebaseapp.com",
    databaseURL: "https://sample-cloudy-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sample-cloudy",  
    storageBucket: "sample-cloudy.appspot.com",  
    messagingSenderId: "239729418644",
    appId: "1:239729418644:web:deb086761c0deb335fef81" 
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(messaging, function(payload){
console.log('onMessage: ',payload);
});