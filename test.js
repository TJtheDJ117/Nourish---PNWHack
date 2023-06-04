import { auth } from './index.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
//signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;
  console.log(email);
  console.log(password);
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    window.location.href = './index.html';
    getDatabase();
    signupForm.reset();
  }).catch((err) => {
    console.log()
  })
})