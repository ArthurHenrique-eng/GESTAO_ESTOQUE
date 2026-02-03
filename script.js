(() => {
  const isLoginPage = document.body?.dataset?.page === "login";
  if (!isLoginPage) {
    return;
  }

  const roleSelect = document.getElementById("role-select");
  const passwordInput = document.getElementById("password-input");
  const loginButton = document.getElementById("login-button");
  const feedback = document.getElementById("login-feedback");

  const routes = {
    vendedor: "vendas.html",
    estoquista: "estoque.html",
    administrativo: "administrativo.html",
  };

  const showFeedback = (message, tone) => {
    if (!feedback) {
      return;
    }
    feedback.textContent = message;
    feedback.classList.remove("warn", "ok");
    if (tone) {
      feedback.classList.add(tone);
    }
  };

  const handleLogin = () => {
    const role = roleSelect?.value;
    const password = passwordInput?.value.trim();

    if (!password) {
      showFeedback("Digite sua senha para continuar.", "warn");
      passwordInput?.focus();
      return;
    }

    if (!routes[role]) {
      showFeedback("Selecione um perfil válido.", "warn");
      return;
    }

    showFeedback("Entrando...", "ok");
    window.location.href = routes[role];
  };

  if (loginButton) {
    loginButton.onclick = handleLogin;
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLogin();
    }
  });
})();
