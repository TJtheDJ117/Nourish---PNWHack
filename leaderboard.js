import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { 
    getFirestore, doc, getDoc, getDocs, collection, addDoc, query, orderBy
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

  var db = getFirestore();
console.log(db)
async function makeBoard() {
  try {
    const collectionRef = collection(db, 'Restaurants');
    const q = query(collectionRef, orderBy('FoodGiven'));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
    });
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
}

makeBoard();