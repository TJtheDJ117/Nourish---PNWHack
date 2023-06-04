import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { 
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBU8jhw82rdDlTB37TIBdBoNrFWG5lTIjQ",
    authDomain: "hackpnw-25ec0.firebaseapp.com",
    projectId: "hackpnw-25ec0",
    storageBucket: "hackpnw-25ec0.appspot.com",
    messagingSenderId: "1048253409903",
    appId: "1:1048253409903:web:4813b9a55d64a4fa0ebb9a"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth(firebaseApp);

function getDatabase() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  var optionValue = selectedOption.value;

  if (optionValue === "restaurants") {
    const colRef = collection(db, 'FoodShelters');
    const addShelForm = document.querySelector('.add');
    addShelForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addDoc(colRef, {
        Name: addResForm.name.value,
        Address: addResForm.Address.value,
      });
    });
  } else {
    const colRef = collection(db, 'Restaurants');
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

// function checkLoginStatus() {
//   // Assuming you have initialized Firebase Auth and have the 'auth' object available

//   // Get the current user
//   const currentUser = auth.currentUser;
//   console.log(currentUser);

//   // Return true if a user is logged in, false otherwise
//   return !!currentUser;
// }
// // Assuming you have initialized Firebase Auth and have the 'auth' object available

// // Get the sign-up link and sign-out button elements
// const signUpLink = document.getElementById('signUpLink');
// const signOutButton = document.getElementById('signOutButton');

// // Function to update the button and link visibility
// function updateButtonVisibility() {
//   if (auth.currentUser) {
//     // User is authenticated, hide the sign-up link and show the sign-out button
//     signUpLink.style.display = 'none';
//     signOutButton.style.display = 'block';
//   } else {
//     // User is not authenticated, show the sign-up link and hide the sign-out button
//     signUpLink.style.display = 'block';
//     signOutButton.style.display = 'none';
//   }
// }

// // Add a click event listener to the sign-out button
// signOutButton.addEventListener('click', () => {
//   // Check if the user is authenticated
//   if (auth.currentUser) {
//     // User is authenticated, sign them out
//     auth.signOut()
//       .then(() => {
//         // Update the button and link visibility
//         updateButtonVisibility();
//       })
//       .catch((error) => {
//         // Handle sign-out error
//         console.log(error.message);
//       });
//   } else {
//     // User is not authenticated, redirect to the sign-up page
//     window.location.href = './account.html';
//   }
// });

// // Call the function initially to set the button and link visibility
// updateButtonVisibility();


// function toggleContent() {
//   const loggedInContent = document.getElementById('loggedIn');
//   const loggedOutContent = document.getElementById('loggedOut');

//   if (checkLoginStatus()) {
//     loggedInContent.style.display = 'block';
//     loggedOutContent.style.display = 'none';
//   } else {
//     loggedInContent.style.display = 'none';
//     loggedOutContent.style.display = 'block';
//   }
// }

// // Listen for changes in the authentication state
// onAuthStateChanged(auth, () => {
//   toggleContent();
// });

// // Call the function initially to set the content based on the current login status
// toggleContent();