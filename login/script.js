const loginPanel = document.getElementById('loginPanel');
const signupPanel = document.getElementById('signupPanel');

function showPanel(panel) {
  const isSignup = panel === 'signup';
  loginPanel.classList.toggle('active', !isSignup);
  signupPanel.classList.toggle('active', isSignup);
  loginPanel.setAttribute('aria-hidden', String(isSignup));
  signupPanel.setAttribute('aria-hidden', String(!isSignup));
  document.getElementById('loginNotice').textContent = '';
  document.getElementById('signupNotice').textContent = '';
}

document.getElementById('showSignup').addEventListener('click', (event) => {
  event.preventDefault(); showPanel('signup');
});
document.getElementById('showLogin').addEventListener('click', (event) => {
  event.preventDefault(); showPanel('login');
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('loginNotice').textContent = 'Demo only: connect this form to your authentication backend.';
});
document.getElementById('signupForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('signupNotice').textContent = 'Demo only: connect this form to your registration backend.';
});
document.getElementById('forgotLink').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('loginNotice').textContent = 'Password reset needs to be connected to a backend.';
});
