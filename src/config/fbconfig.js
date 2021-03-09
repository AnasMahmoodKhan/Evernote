import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAYg7NzrQfvtel4HvPvwGzkpVB7lwRdsTQ",
  authDomain: "evernote-clone-e1a05.firebaseapp.com",
  projectId: "evernote-clone-e1a05",
  storageBucket: "evernote-clone-e1a05.appspot.com",
  messagingSenderId: "785238257080",
  appId: "1:785238257080:web:a8fd2d80962766c337734d",
  measurementId: "G-QR3T5CB90C",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
