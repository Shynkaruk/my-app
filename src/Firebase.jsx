import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8tEcZ6qNmZ_LpOAb_HVPqvDUnd_tYRxA",
    authDomain: "task-visio-423608.firebaseapp.com",
    projectId: "task-visio-423608",
    storageBucket: "task-visio-423608.appspot.com",
    messagingSenderId: "23939732189",
    appId: "1:23939732189:web:6f1180c2c35f73836f4134",
    measurementId: "G-1Y91WWXM8B"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(app);

  export default db;