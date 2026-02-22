const googleLoginBtn = document.getElementById('googleLoginBtn');
const loginStatus = document.getElementById('loginStatus');

if (googleLoginBtn && loginStatus) {
  googleLoginBtn.addEventListener('click', () => {
    loginStatus.textContent = 'Integração Firebase pendente: configure provider GoogleAuthProvider e credenciais do projeto.';
  });
}
