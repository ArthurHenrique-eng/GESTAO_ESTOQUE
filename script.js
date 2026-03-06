(() => {
  const isLoginPage = document.body?.dataset?.page === "login";
  if (!isLoginPage) {
    return;
  }

  const roleSelect = document.getElementById("role-select");
  const passwordInput = document.getElementById("password-input");
  const loginButton = document.getElementById("login-button");
  const feedback = document.getElementById("login-feedback");
  const chatLauncher = document.getElementById("chatkit-launcher");
  const chatPanel = document.getElementById("chatkit-panel");
  const chatClose = document.getElementById("chatkit-close");
  const calendarioButton = document.querySelector(".outline-button");
  const destaquesButton = document.querySelector(".ghost-button");

  const accessRules = {
    vendedor: { password: "123", route: "vendas.html", label: "vendas" },
    estoquista: { password: "456", route: "estoque.html", label: "estoque" },
    administrativo: {
      password: "789",
      route: "administrativo.html",
      label: "administrativo",
    },
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
    const role = roleSelect?.value ?? "";
    const password = passwordInput?.value.trim() ?? "";

    if (!role || role === "0") {
      showFeedback("Selecione o tipo de usuário!", "warn");
      roleSelect?.focus();
      return;
    }

    if (!password) {
      showFeedback("Digite sua senha para continuar.", "warn");
      passwordInput?.focus();
      return;
    }

    const access = accessRules[role];

    if (!access || password !== access.password) {
      showFeedback("Usuário ou senha inválidos!", "warn");
      return;
    }

    showFeedback(`Você será direcionado para a página de ${access.label}.`, "ok");
    localStorage.setItem("loggedIn", "true");
    window.setTimeout(() => {
      window.location.href = access.route;
    }, 500);
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

  const bootChatkit = async () => {
    const chatRoot = document.getElementById("chatkit-root");
    if (!chatRoot || typeof chatRoot.setOptions !== "function") {
      return;
    }

    chatRoot.setOptions({
      api: {
        getClientSecret: async () => {
          const response = await fetch("/api/chatkit/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: "visitante" }),
          });
          if (!response.ok) {
            throw new Error("Falha ao iniciar sessão do ChatKit.");
          }
          const data = await response.json();
          return data.client_secret;
        },
      },
    });
  };

  if (window.addEventListener) {
    window.addEventListener("load", () => {
      bootChatkit().catch((error) => {
        showFeedback(error.message, "warn");
      });
    });
  }

  const toggleChat = (shouldOpen) => {
    if (!chatPanel) {
      return;
    }
    const isOpen =
      typeof shouldOpen === "boolean" ? !shouldOpen : chatPanel.hidden === false;
    chatPanel.hidden = isOpen;
    if (chatLauncher) {
      chatLauncher.textContent = isOpen ? "Precisa de ajuda?" : "Fechar chat";
    }
  };

  if (chatLauncher) {
    chatLauncher.addEventListener("click", () => toggleChat());
  }

  if (chatClose) {
    chatClose.addEventListener("click", () => toggleChat(false));
  }

  if (calendarioButton) {
    calendarioButton.addEventListener("click", () => {
      window.location.href = "calendario.html";
    });
  }

  if (destaquesButton) {
    destaquesButton.addEventListener("click", () => {
      window.location.href = "novidades.html";
    });
  }
})();
