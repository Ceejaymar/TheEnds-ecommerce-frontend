import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "theends.firebaseapp.com",
  databaseURL: "https://theends.firebaseio.com",
  projectId: "theends",
  storageBucket: "theends.appspot.com",
  messagingSenderId: "178375851777"
};

firebase.initializeApp(config);

export default firebase;
