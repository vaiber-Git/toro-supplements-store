// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    getDocs,
    query,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGv09esvazmauMi-OvSpmjO_UyKzPHrao",
  authDomain: "toro-supplements.firebaseapp.com",
  projectId: "toro-supplements",
  storageBucket: "toro-supplements.firebasestorage.app",
  messagingSenderId: "561838863818",
  appId: "1:561838863818:web:5c8523ab09630fee614b33"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Google Provider Instance

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//Creating Firestore DB Instance

export const firestoreDB = getFirestore();

//

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

    //This is to protect our code, Don't run the function if there is no argument    
    if(!userAuth) return;

    const userDocRef = doc(firestoreDB, 'users', userAuth.uid);
    //console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    
    
    if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('Error Message', error.message);
    }
  }

  return userDocRef;
} 

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth);  

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(firestoreDB, 'categories');
  const queryObj = query(collectionRef);

  const querySnapshot = await getDocs(queryObj);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};