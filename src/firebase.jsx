import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDDK04ZM1JSnorLJXhcszTj_84_hcdFz0",
    authDomain: "login-signup-a2800.firebaseapp.com",
    projectId: "login-signup-a2800",
    storageBucket: "login-signup-a2800.appspot.com",
    messagingSenderId: "29211105750",
    appId: "1:29211105750:web:a895f4c791c60f6a92ac77",
    measurementId: "G-GJMJFLG2ZV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


