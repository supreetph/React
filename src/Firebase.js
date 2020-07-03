import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBWb1rKo_iNxs1cXAsSrLGSdHnplYQAFn8",
    authDomain: "hip-voyager-241415.firebaseapp.com",
    databaseURL: "https://hip-voyager-241415.firebaseio.com",
    projectId: "hip-voyager-241415",
    storageBucket: "hip-voyager-241415.appspot.com",
    messagingSenderId: "255129161920",
    appId: "1:255129161920:web:a4cb18c4a6301326e85d25",
    measurementId: "G-HKR3TBBDJG"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
