import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlj2YmbBpmcZckGGHJ6wWp4aWQVDZXrqs",
    authDomain: "instagram-clone-react-d78e1.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-d78e1.firebaseio.com",
    projectId: "instagram-clone-react-d78e1",
    storageBucket: "instagram-clone-react-d78e1.appspot.com",
    messagingSenderId: "990894665448",
    appId: "1:990894665448:web:8f30763d90d349ae93235d",
    measurementId: "G-PQ5SNRPT80"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};