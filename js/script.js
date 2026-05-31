document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const loginButton = document.getElementById('login-button');
  const loginFeedback = document.getElementById('login-feedback');
  const roleSelect = document.getElementById('role-select');
  const passwordInput = document.getElementById('password-input');

  const validPasswords = {
    vendedor: 'vendedor123',
    estoquista: 'estoque123',
    administrativo: 'admin123'
  };

  function handleLogin(e) {
    if (e) e.preventDefault();
    const role = roleSelect.value;
    const password = passwordInput.value;

    if (!password) {
      showFeedback('Por favor, informe sua senha.', 'error');
      return;
    }

    if (password === validPasswords[role]) {
      localStorage.setItem('userRole', role);
      showFeedback('Login realizado com sucesso!', 'success');
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000);
    } else {
      showFeedback('Senha incorreta. Tente novamente.', 'error');
    }
  }

  function showFeedback(message, type) {
    loginFeedback.textContent = message;
    loginFeedback.className = `feedback ${type}`;
  }

  loginButton.addEventListener('click', handleLogin);
  loginForm.addEventListener('submit', handleLogin);

  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleLogin();
    }
  });
});
