// جایگزین با اطلاعات Firebase خودت
const firebaseConfig = {
  apiKey: "AIzaSyADsFrutNZMG7riaTGen3j_YCupVESO1f0",
  authDomain: "chat-app-359cd.firebaseapp.com",
  projectId: "chat-app-359cd",
  storageBucket: "chat-app-359cd.firebasestorage.app",
  messagingSenderId: "181014080911",
  appId: "1:181014080911:web:8e06a4e6e382b384ceeffa",
  measurementId: "G-2BV7N28MS1"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();