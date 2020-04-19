import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvdjvvOh1M9IaT87Dccz2GuyoHWvamrhQ",
    authDomain: "crwn-db-4e8b8.firebaseapp.com",
    databaseURL: "https://crwn-db-4e8b8.firebaseio.com",
    projectId: "crwn-db-4e8b8",
    storageBucket: "crwn-db-4e8b8.appspot.com",
    messagingSenderId: "546896340707",
    appId: "1:546896340707:web:da2e7a6f9c1347de82c7d6",
    measurementId: "G-QBTRJ4FBEQ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
        
      }
    }
    return userRef;
    
  }


  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch()
    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    });

    return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc =>{
      const {title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((acc, collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc;
    }, {})
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;