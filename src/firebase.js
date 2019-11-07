import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import apiKey from './config/config';

const config = {
  apiKey: process.env.API_KEY || apiKey,
  authDomain: "theends.firebaseapp.com",
  databaseURL: "https://theends.firebaseio.com",
  projectId: "theends",
  storageBucket: "theends.appspot.com",
  messagingSenderId: "178375851777"
};

firebase.initializeApp(config);

export default firebase;
