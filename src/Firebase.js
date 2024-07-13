import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdBictezw-FIBuYVgqeohxhMLB4XfDthI",
  authDomain: "flickk-964eb.firebaseapp.com",
  projectId: "flickk-964eb",
  storageBucket: "flickk-964eb.appspot.com",
  messagingSenderId: "999041144522",
  appId: "1:999041144522:web:4addc73adf094ca1658633",
  measurementId: "G-2HDYN43826",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
