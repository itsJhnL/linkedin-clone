import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWNcVvQQQJGEKt7bWWBw7hdPPkjnBhCp8",
  authDomain: "linked-in-clone-9eae2.firebaseapp.com",
  projectId: "linked-in-clone-9eae2",
  storageBucket: "linked-in-clone-9eae2.appspot.com",
  messagingSenderId: "1075331588213",
  appId: "1:1075331588213:web:b755ee57416263670e583c"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;