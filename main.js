let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Scroll Reveal

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top' })
sr.reveal('.form-container form', { delay: 400, origin: 'left' })
sr.reveal('.heading', { delay: 400, origin: 'top' })
sr.reveal('.ride-container .box', { delay: 200, origin: 'top' })
sr.reveal('.services-container .box', { delay: 200, origin: 'top' })
sr.reveal('.about-container', { delay: 200, origin: 'top' })
sr.reveal('.reviews-container', { delay: 200, origin: 'top' })
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' })

// Sign Up Modal Functionality
const signUpBtn = document.querySelector('.sign-up');
const modal = document.getElementById('signupModal');
const closeModal = document.getElementById('closeModal');

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Ro'yxatdan o'tish muvaffaqiyatli amalga oshirildi!");
  this.reset();
  modal.style.display = 'none';
});