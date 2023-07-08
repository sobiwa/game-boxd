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
  DocumentSnapshot,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  deleteUser,
  reauthenticateWithPopup,
  EmailAuthProvider,
  reauthenticateWithCredential,
  linkWithCredential,
  linkWithPopup,
  sendEmailVerification,
} from 'firebase/auth';

interface UserGameData {
  gameID: number;
  userID?: string;
  rating?: number;
  backlogged?: boolean | string;
  review?: string;
}

const firebaseConfig = {
  apiKey: 'AIzaSyD6iKRE1yfUGUQsFLpGy-QgHjMLzyjtQGo',
  authDomain: 'game-boxd.firebaseapp.com',
  projectId: 'game-boxd',
  storageBucket: 'game-boxd.appspot.com',
  messagingSenderId: '729835479806',
  appId: '1:729835479806:web:08345113602ceade873baf',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export async function getUserDataForGame(gameID: number | string) {
  const userGamesRef = collection(db, 'userGameData');
  const q = query(
    userGamesRef,
    where('userID', '==', auth.currentUser?.uid),
    where('gameID', '==', gameID)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return 'no user data';
  }
  return querySnapshot.docs.map((item) => item.data());
}

export async function getUserDataForGamesArray(gameIDs: number[]) {
  const userGamesRef = collection(db, 'userGameData');
  const q = query(
    userGamesRef,
    where('userID', '==', auth.currentUser?.uid),
    where('gameID', 'in', gameIDs)
  );
  const querySnapshot = await getDocs(q);
  const userDataObject: { [key: number]: UserGameData } = {};
  querySnapshot.forEach((item: DocumentSnapshot) => {
    const data = item.data() as UserGameData;
    userDataObject[data.gameID] = data;
  });
  return userDataObject;
}

export async function updateUserGameData(update: UserGameData) {
  const existingData: string[] = [];
  const userGamesRef = collection(db, 'userGameData');
  const q = query(
    userGamesRef,
    where('userID', '==', auth.currentUser?.uid),
    where('gameID', '==', +update.gameID)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    try {
      await addDoc(userGamesRef, { ...update, userID: auth.currentUser?.uid });
      return 'Successfully stored new data';
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error adding new data: ${err.message}`);
      }
      return err;
    }
  }
  querySnapshot.forEach((item) => existingData.push(item.id));

  try {
    await Promise.all(
      existingData.map((item) =>
        updateDoc(doc(db, `userGameData/${item}`), { ...update })
      )
    );
    console.log('doc updated');
    return 'Successfully updated data';
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error updating data: ${err.message}`);
    }
    return err;
  }
}

export async function anonLogin() {
  try {
    const anon = await signInAnonymously(auth);
    return anon.user;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Anonymous sign in failed: ${err.message}`);
    }
    return err;
  }
}

export async function userVerificationComplete() {
  const userRef = doc(db, `users/${auth.currentUser?.uid}`);
  const userData = await getDoc(userRef);
  return userData.exists() && userData.data().verified;
}

export { auth };
