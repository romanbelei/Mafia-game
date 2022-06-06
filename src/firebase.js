import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: 'AIzaSyCjURkTZP-hYQ003_umy1baP9wor83vepw',
  authDomain: 'mafia-game-by-roman.firebaseapp.com',
  databaseURL:
    'https://mafia-game-by-roman-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'mafia-game-by-roman',
  storageBucket: 'mafia-game-by-roman.appspot.com',
  messagingSenderId: '465612943644',
  appId: '1:465612943644:web:ef0270733806ce0d7a4ad9',
  measurementId: 'G-P4VCHM8991',
};

const app = initializeApp(firebaseConfig);
console.log(app);
