import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCP4kPTLTQhJRHiWTyJWD_FuLz9LgTBYQw",
    authDomain: "u-projects-management.firebaseapp.com",
    projectId: "u-projects-management",
    storageBucket: "u-projects-management.appspot.com",
    messagingSenderId: "792396512387",
    appId: "1:792396512387:web:85b13405744d988e882fb6",
    measurementId: "G-15W75W51EL"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.Timestamp
  export {projectFirestore, projectAuth,timestamp}