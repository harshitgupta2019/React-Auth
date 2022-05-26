import firebase from 'firebase'

const firebaseConfig = {
  // Copy and paste your Firebase SDK code here
  apiKey: "AIzaSyCpJltTEnVICwZL5PusgI_xLfStGrbwyoE",
  authDomain: "login-c3bb8.firebaseapp.com",
  projectId: "login-c3bb8",
  storageBucket: "login-c3bb8.appspot.com",
  messagingSenderId: "461560543181",
  appId: "1:461560543181:web:3a264515f6d361d4123684"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire