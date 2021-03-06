import firebase from "firebase/app";
import "firebase/database";

// set up club spot
const firebaseConfig = {
  apiKey: "AIzaSyB0YH7-jSrWvmBEaK8xvrnBT8sAYlV86fM",
  authDomain: "club-spot.firebaseapp.com",
  databaseURL: "https://club-spot-default-rtdb.firebaseio.com",
  projectId: "club-spot",
  storageBucket: "club-spot.appspot.com",
  messagingSenderId: "466909196535",
  appId: "1:466909196535:web:6493f5913630fb11ede3f2",
  measurementId: "G-LNVM4T5KBN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
export { firebase };