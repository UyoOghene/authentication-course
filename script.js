
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
//   import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

//   const firebaseConfig = {
//     apiKey: "AIzaSyB7OkfM-p0VaB8m9c7dBExS9ViR-DmgMX0",
//     authDomain: "login-8405c.firebaseapp.com",
//     projectId: "login-8405c",
//     storageBucket: "login-8405c.appspot.com",
//     messagingSenderId: "264742098294",
//     appId: "1:264742098294:web:2d08cc7f3e9b67a7fad657"
//   };

//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   auth.languageCode = 'en'
//   const  provider = new GoogleAuthProvider();


// const googlebtn = document.querySelector('#googleBtn');
// googlebtn.addEventListener('click', function(){
//     signInWithPopup(auth, provider)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const user = result.user;
//     console.log(user);
//     window.location.href = "loggedin.html";
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// })

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7OkfM-p0VaB8m9c7dBExS9ViR-DmgMX0",
  authDomain: "login-8405c.firebaseapp.com",
  projectId: "login-8405c",
  storageBucket: "login-8405c.appspot.com",
  messagingSenderId: "264742098294",
  appId: "1:264742098294:web:2d08cc7f3e9b67a7fad657"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleBtn = document.querySelector('#googleBtn');
googleBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.href = 'loggedin.html';
    })
    .catch((error) => {
      console.error(error.code, error.message);
    });
});
