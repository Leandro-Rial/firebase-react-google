import firebase from 'firebase/app';
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANIH_xsz-XUqilbem_WDPK4a5BoQfMTbI",
  authDomain: "test-firebase-31229.firebaseapp.com",
  databaseURL: "https://test-firebase-31229.firebaseio.com",
  projectId: "test-firebase-31229",
  storageBucket: "test-firebase-31229.appspot.com",
  messagingSenderId: "580106123243",
  appId: "1:580106123243:web:8f2f803fda6df4f857cbae"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);