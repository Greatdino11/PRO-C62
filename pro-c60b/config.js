import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDz2MBvoVwq6VxJQd_7RW0J3_9ofd8vFfg",
    authDomain: "attendance-7edfe.firebaseapp.com",
    projectId: "attendance-7edfe",
    databaseURL: "https://attendance-7edfe-default-rtdb.firebaseio.com/",
    storageBucket: "attendance-7edfe.appspot.com",
    messagingSenderId: "983251192376",
    appId: "1:983251192376:web:10c7b7199fad4bbb0e74cd",
    measurementId: "G-NWZJWMV6QG"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();
