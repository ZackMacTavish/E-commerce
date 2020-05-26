import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnfWWp1pxHT6eD3GOnurshWvVDgxALsO8",
    authDomain: "crwn-db-13fbe.firebaseapp.com",
    databaseURL: "https://crwn-db-13fbe.firebaseio.com",
    projectId: "crwn-db-13fbe",
    storageBucket: "crwn-db-13fbe.appspot.com",
    messagingSenderId: "208394502059",
    appId: "1:208394502059:web:014debafc91a611cb11cee",
    measurementId: "G-NKBTRS8DW1"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
         })
         
        } catch (error) {
          console.log('error creating user, error.message');


      }
    }
    return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;