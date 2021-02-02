import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAHnI_K53Y33CWZY_2p6htdRux3C2YmNgI",
    authDomain: "nwitter-be3a8.firebaseapp.com",
    projectId: "nwitter-be3a8",
    storageBucket: "nwitter-be3a8.appspot.com",
    messagingSenderId: "605382417579",
    appId: "1:605382417579:web:931ab0acfb784998196bee"
};

export default firebase.initializeApp(firebaseConfig);