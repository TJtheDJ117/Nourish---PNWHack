// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
//   import { 
//     getFirestore, doc, getDoc, getDocs, collection, addDoc, query, orderBy
// } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
// const firebaseConfig = {
//     apiKey: "AIzaSyBU8jhw82rdDlTB37TIBdBoNrFWG5lTIjQ",
//     authDomain: "hackpnw-25ec0.firebaseapp.com",
//     projectId: "hackpnw-25ec0",
//     storageBucket: "hackpnw-25ec0.appspot.com",
//     messagingSenderId: "1048253409903",
//     appId: "1:1048253409903:web:4813b9a55d64a4fa0ebb9a"
//   };

//   const firebaseApp = initializeApp(firebaseConfig);
//   const db = getFirestore();
//   var arr = [];

//   async function makeBoard() {
//     try {
//       const collectionRef = collection(db, 'Restaurants');
//       const q = query(collectionRef, orderBy('FoodGiven'));
//       const snapshot = await getDocs(q);

//       snapshot.forEach((doc) => {
//         arr.push(doc.data());
//       });
//     } catch (error) {
//       console.log("Error getting documents: ", error);
//     }
//   }

//   async function printLeaderboard() {
//     await makeBoard();
//     console.log(arr[0]);
//     const divNames = ["name-1", "name-2", "name-3", "name-4", "name-5", "name-6", "name-7", "name-8", "name-9", "name-10"];
//     for(let i = arr.length; i > arr.length - 10; i--) {
//         const currDiv = document.getElementById(divNames[i % divNames.length]);
//         const paragraph = document.createElement("p");
//         paragraph.textContent = arr[i].Name;
//         currDiv.appendChild(paragraph);
//     }
//   }

//   printLeaderboard();