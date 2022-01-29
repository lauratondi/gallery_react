// import firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyB0eqjFVzXzUehsQGWxoMmp3osg-9FLHbY",
//   authDomain: "gallery-app-41fdf.firebaseapp.com",
//   databaseURL:
//     "https://gallery-app-41fdf-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "gallery-app-41fdf",
//   storageBucket: "gallery-app-41fdf.appspot.com",
//   messagingSenderId: "581445022019",
//   appId: "1:581445022019:web:d06c5de128249ebfd97ff6",
//   measurementId: "G-6CKBY8KP19",
// };

// export const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);

import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyB0eqjFVzXzUehsQGWxoMmp3osg-9FLHbY",
  authDomain: "gallery-app-41fdf.firebaseapp.com",
  databaseURL:
    "https://gallery-app-41fdf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gallery-app-41fdf",
  storageBucket: "gallery-app-41fdf.appspot.com",
  messagingSenderId: "581445022019",
  appId: "1:581445022019:web:d06c5de128249ebfd97ff6",
  measurementId: "G-6CKBY8KP19",
});
