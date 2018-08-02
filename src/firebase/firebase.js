import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAnOVwJ9f3d_v3XNuYMUII0Mdf_bgY20TQ",
    authDomain: "react-firebase-auth-71ce4.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-71ce4.firebaseio.com",
    projectId: "react-firebase-auth-71ce4",
    storageBucket: "react-firebase-auth-71ce4.appspot.com",
    messagingSenderId: "865561235637"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
    auth,
};