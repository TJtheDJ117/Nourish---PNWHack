import { auth } from './index.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
//signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const res = document.getElementById("loggedInRes")
  const shel = document.getElementById("loggedInShel")
  const normal = document.getElementById("loggedOut")
  console.log(document.getElementById("loggedInRes"));
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    var selectedOption = document.querySelector('input[name="options"]:checked');
    var optionValue = selectedOption.value;
    console.log(optionValue);
    if(optionValue === "restaurants") {
      window.location.href = './restaurant.html'
    } else {
      window.location.href = './rest.html'
    }
    // getDatabase();
    signupForm.reset();
  }).catch((err) => {
    console.log()
  })
})