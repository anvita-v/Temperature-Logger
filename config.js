import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA7mdhJrDK2LW3acHwI9-oQEYJjBIsgIvI",
    authDomain: "temperature-logger-e9097.firebaseapp.com",
    projectId: "temperature-logger-e9097",
    storageBucket: "temperature-logger-e9097.appspot.com",
    messagingSenderId: "875318790913",
    appId: "1:875318790913:web:dc911a236be699f5326900"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
