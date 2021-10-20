import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC4fH5NVcyxcL_iuZJmiCE90fqt-IFzuhE",
    authDomain: "clon-de-netflix-2d5e3.firebaseapp.com",
    projectId: "clon-de-netflix-2d5e3",
    storageBucket: "clon-de-netflix-2d5e3.appspot.com",
    messagingSenderId: "715477502619",
    appId: "1:715477502619:web:b0a58eaf09af604aa2543e"
});

export const auth = firebase.auth();

export default app;