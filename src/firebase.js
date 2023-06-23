import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  getDocsFromServer,
  setDoc,
  getDocs,
  serverTimestamp,
  collection,
  query,
  where,
} from 'firebase/firestore';
// import {
//   getAuth,
//   signInAnonymously,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   updateProfile,
//   deleteUser,
//   reauthenticateWithPopup,
//   EmailAuthProvider,
//   reauthenticateWithCredential,
//   linkWithCredential,
//   linkWithPopup,
//   sendEmailVerification,
// } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6iKRE1yfUGUQsFLpGy-QgHjMLzyjtQGo',
  authDomain: 'game-boxd.firebaseapp.com',
  projectId: 'game-boxd',
  storageBucket: 'game-boxd.appspot.com',
  messagingSenderId: '729835479806',
  appId: '1:729835479806:web:08345113602ceade873baf'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

