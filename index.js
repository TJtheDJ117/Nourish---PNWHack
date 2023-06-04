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

  const db = getFirestore()
  const auth = getAuth(firebaseApp);
  const colRef = collection(db, 'FoodShelters')

    // getDocs(colRef)
    //     .then((snapshot) => {
    //         let shelters = [];
    //         snapshot.docs.forEach((doc) => {
    //             shelters.push({ ...doc.data(), id: doc.id })
    //         })
    //         //console.log(shelters);
    //     })
        
        const addResForm = document.querySelector('.add')
        addResForm.addEventListener('submit', (e) => {
            e.preventDefault()
            addDoc()
        })

function getDatabase() {
    var selectedOption = document.querySelector('input[name="options"]:checked');
    var optionValue = selectedOption.value;
    if (optionValue == "restaurants") {
        const colRef = collection(db, 'FoodShelters')
        const addResForm = document.querySelector('.add')
        addResForm.addEventListener('submit', (e) => {
            e.preventDefault()
            addDoc(colRef, {
                Name: addResForm.name.value,
                Address: addResForm.Address.value,
            })
        })
    } else {
        const colRef = collection(db, 'Restaurants')
        const addShelForm = document.querySelector('.add')
        addResForm.addEventListener('submit', (e) => {
            e.preventDefault()
            addDoc(colRef, {
                Name: addShelForm.name.value,
                Address: addShelForm.Address.value,
            })
        })
    }
}


//signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;
  console.log(email);
  console.log(password);
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log('user created: ' + cred.user);
    signupForm.reset();
  }).catch((err) => {
    console.log("NOT WORKING")
  })
})
