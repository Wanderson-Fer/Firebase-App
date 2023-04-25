'use strict';

// https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();

const {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENTID
} = process.env;

const firebaseApp = initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENTID
});

const auth = getAuth(firebaseApp);

// Detect authentication
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        console.log('Logged in ');
    } else {
        console.log('No user');
    }
});
