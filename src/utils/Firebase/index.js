import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjlEcLnccURi0ao_yAXizPlg4AJG0McQQ',
  authDomain: 'feed-clone-92eb9.firebaseapp.com',
  databaseURL: 'https://feed-clone-92eb9.firebaseio.com',
  projectId: 'feed-clone-92eb9',
  storageBucket: 'feed-clone-92eb9.appspot.com',
  messagingSenderId: '193576148493',
  appId: '1:193576148493:web:95e1682c88fa5f606d7f44',
  measurementId: 'G-LYYTQKQXLG'
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
