import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDADss9qeEzRmvsgpBd1ISRAYtEoaiWnkk",
    authDomain: "whatsapp-clone-4232b.firebaseapp.com",
    projectId: "whatsapp-clone-4232b",
    storageBucket: "whatsapp-clone-4232b.appspot.com",
    messagingSenderId: "968343793855",
    appId: "1:968343793855:web:1a4ea5a5b24fb3a459960a",
    measurementId: "G-WVMTQ1ZS4R"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = app.storage()
  export {auth, provider, storage}
  export default db
  