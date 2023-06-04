import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { 
    getFirestore, doc, getDoc, getDocs, collection 
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBU8jhw82rdDlTB37TIBdBoNrFWG5lTIjQ",
    authDomain: "hackpnw-25ec0.firebaseapp.com",
    projectId: "hackpnw-25ec0",
    storageBucket: "hackpnw-25ec0.appspot.com",
    messagingSenderId: "1048253409903",
    appId: "1:1048253409903:web:4813b9a55d64a4fa0ebb9a"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

  const colRef = collection(db, 'FoodShelters')

  getDocs(colRef)
    .then((snapshot) => {
        let shelters = [];
        console.log(snapshot.docs);
        snapshot.docs.array.forEach((doc) => {
            shelters.push({ ...doc.data(), id: doc.id })
        })
        console.log("HERE 2");
        console.log(shelters);
    })