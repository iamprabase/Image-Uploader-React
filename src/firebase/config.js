import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import { value } from "./configValue";

// Initialize Firebase
firebase.initializeApp(value);

const firebaseStorage = firebase.storage();
const firebaseFiresStore = firebase.firestore();

export { firebaseStorage, firebaseFiresStore };
