import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBZmCj0NvW9PTwrU6ZG_dffmF1N6SJnLuA",
    authDomain: "pandachat-1680b.firebaseapp.com",
    projectId: "pandachat-1680b",
    storageBucket: "pandachat-1680b.appspot.com",
    messagingSenderId: "330449421815",
    appId: "1:330449421815:web:a22e7a8cb577345cf21af2",
    measurementId: "G-HLFNBWM3WE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider };

  export default db;