import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { 
    getFirestore, doc, getDoc, getDocs, collection, addDoc
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

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
  export const auth = getAuth(firebaseApp);

function getDatabase() {
    var selectedOption = document.querySelector('input[name="options"]:checked');
    var optionValue = selectedOption.value;
    if (optionValue == "restaurants") {
        const colRef = collection(db, 'FoodShelters')
        const addShelForm = document.querySelector('.add')
        addShelForm.addEventListener('submit', (e) => {
            e.preventDefault()
            addDoc(colRef, {
                Name: addResForm.name.value,
                Address: addResForm.Address.value,
            })
        })
    } else {
        const colRef = collection(db, 'Restaurants')
        const addResForm = document.querySelector('.add');
        addResForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addDoc(colRef, {
          Name: addResForm.name.value,
          Address: addResForm.Address.value,
      });
    });

    }
}


function checkLoginStatus() {
  // Assuming you have initialized Firebase Auth and have the 'auth' object available

  // Get the current user
  const currentUser = auth.currentUser;
  console.log(currentUser)
  // Return true if a user is logged in, false otherwise
  return !!currentUser;
}

var isLoggedIn = checkLoginStatus();
console.log(isLoggedIn)
// Get references to the HTML elements
var loggedInContent = document.querySelector('.loggedIn');
var loggedOutContent = document.querySelector('.loggedOut');

// Verify the selected elements
console.log(loggedInContent); // Check if the element is selected correctly

// Use conditional statements to prevent errors
if (loggedInContent) {
  loggedInContent.style.display = 'block';
}

if (loggedOutContent) {
  loggedOutContent.style.display = 'none';
}