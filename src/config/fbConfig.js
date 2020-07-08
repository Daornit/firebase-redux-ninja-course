import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBdgUrNJzA5XHeqKtCVumm1z_PoeONber4",
  authDomain: "feelmongolia-7f7b2.firebaseapp.com",
  databaseURL: "https://feelmongolia-7f7b2.firebaseio.com",
  projectId: "feelmongolia-7f7b2",
  storageBucket: "feelmongolia-7f7b2.appspot.com",
  messagingSenderId: "738823745021",
  appId: "1:738823745021:web:e1a94368cc5d78f4e2bd94",
  measurementId: "G-GR3WDMX3P1"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 