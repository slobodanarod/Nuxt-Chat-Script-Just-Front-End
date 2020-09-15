import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCETIrSUpgceIsFoITxjFTEO3FFwTsdlMY",
    authDomain: "chat-724.firebaseapp.com",
    databaseURL: "https://chat-724.firebaseio.com",
    projectId: "chat-724",
    storageBucket: "chat-724.appspot.com",
    messagingSenderId: "722127991972",
    appId: "1:722127991972:web:eca9c8fac64c0225576231"
};
// Initialize Firebase
let app = null;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}
export default firebase;