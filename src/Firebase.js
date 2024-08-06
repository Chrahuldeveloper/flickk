import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0qudGLFOMQljy9dgZk79k2CPkr4LtNi8",
  authDomain: "flickk-36d68.firebaseapp.com",
  projectId: "flickk-36d68",
  storageBucket: "flickk-36d68.appspot.com",
  messagingSenderId: "752973074420",
  appId: "1:752973074420:web:af91bb37240fd21caef3a1",
  measurementId: "G-K411TRHE6D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
