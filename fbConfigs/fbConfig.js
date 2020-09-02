require("firebase/auth");
const firebase = require('firebase')
const admin = require('firebase-admin')
const serviceAccount = require(/*YOUR SERVICE ACCOUNT JSON PATH*/);

var firebaseConfig = {
    apiKey: "AIzaSyDtB8di5IyIhPaoiudZHjXR23Y7lPgmKjI",
    authDomain: "super-douper-sounds.firebaseapp.com",
    databaseURL: "https://super-douper-sounds.firebaseio.com",
    projectId: "super-douper-sounds",
    storageBucket: "super-douper-sounds.appspot.com",
    messagingSenderId: "465791877838",
    appId: "1:465791877838:web:e29f1adf00fe190034069f",
    measurementId: "G-G6DDP4FL88"

};
firebase.initializeApp(firebaseConfig);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://super-douper-sounds.firebaseio.com"
});

module.exports = { firebase, admin };