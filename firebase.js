import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKdMu9Vwst0emMEoH9DvpbCZa-_p_4Yr8",
  authDomain: "whtspp-demo-2.firebaseapp.com",
  projectId: "whtspp-demo-2",
  storageBucket: "whtspp-demo-2.appspot.com",
  messagingSenderId: "841699080421",
  appId: "1:841699080421:web:e227c1f83150698e443c0c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider };