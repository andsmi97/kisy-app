import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { config } from '../config/firebase';
firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any,
) => {
  if (!userAuth) {
    return;
  }
  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    console.log('additional data', additionalData);
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        sex: additionalData.sex,
        dateOfBirth: additionalData.dateOfBirth,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
