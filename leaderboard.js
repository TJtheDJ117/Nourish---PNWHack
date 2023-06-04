import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { 
    getFirestore, doc, getDoc, getDocs, collection, addDoc
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


console.log("INSIDE");
function makeBoard() {
    console.log("HERE");
    const databaseRef = firebase.database().ref('your-database-reference');
    databaseRef.orderByChild('fieldName').on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
    const childData = childSnapshot.val();
    console.log(databaseRef);
    console.log(childData);
        });
    });
}