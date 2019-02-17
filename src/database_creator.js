import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDDIs012L-r01eKty4sOU-aP3dh5C7pkBM",
    authDomain: "ipekchatapp.firebaseapp.com",
    databaseURL: "https://ipekchatapp.firebaseio.com",
    projectId: "ipekchatapp",
    storageBucket: "ipekchatapp.appspot.com",
    messagingSenderId: "371384629431"
  };
  firebase.initializeApp(config);
const database = firebase.database();

export default database;


