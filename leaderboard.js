import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { 
    getFirestore, doc, getDoc, getDocs, collection, addDoc
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
const firebaseConfig = {
    apiKey: "AIzaSyBU8jhw82rdDlTB37TIBdBoNrFWG5lTIjQ",
    authDomain: "hackpnw-25ec0.firebaseapp.com",
    projectId: "hackpnw-25ec0",
    storageBucket: "hackpnw-25ec0.appspot.com",
    messagingSenderId: "1048253409903",
    appId: "1:1048253409903:web:4813b9a55d64a4fa0ebb9a"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  //const db = getFirestore()
  //const auth = getAuth(firebaseApp);

  var db = firebase.getFirestore();

function makeBoard() {
    console.log("HERE");
    var collectionRef = db.collection('Restaurants');
    databaseRef.orderByChild('FoodGiven').on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
    const childData = childSnapshot.val();
    console.log(databaseRef);
    console.log(childData);
        });
    });
}

makeBoard();