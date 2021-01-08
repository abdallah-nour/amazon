import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqKJ1eH07izZX-WBSbugcJMCyi3CMmO3s",
  authDomain: "amaz0n-gsg.firebaseapp.com",
  databaseURL: "https://amaz0n-gsg.firebaseio.com",
  projectId: "amaz0n-gsg",
  storageBucket: "amaz0n-gsg.appspot.com",
  messagingSenderId: "543579820029",
  appId: "1:543579820029:web:c5236f22edece1f58e5394",
  measurementId: "G-ST9QW3WQPC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp.name);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// try {
//   await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
// } catch (e) {
//   console.log(e);
// }
// auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

export { firebase, db, auth };
