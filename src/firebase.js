import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTLe8YSq4Uz0cDPgP9RXCLIo92fF3ObM4",
    authDomain: "linkedin-clone-arsh.firebaseapp.com",
    projectId: "linkedin-clone-arsh",
    storageBucket: "linkedin-clone-arsh.appspot.com",
    messagingSenderId: "682740614165",
    appId: "1:682740614165:web:1154f8969a954eca2a7a1c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
