document.addEventListener('DOMContentLoaded', function() {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    window.location.href = 'index.html';
    return;
  }

  updateUserGreeting();
  setupNavigation();
});

function updateUserGreeting() {
  const userRole = localStorage.getItem('userRole');
  const roleNames = {
    vendedor: 'Vendedor',
    estoquista: 'Estoquista',
    administrativo: 'Administrativo'
  };

  const roleName = roleNames[userRole] || 'Usuário';
  const welcomeText = document.querySelector('.welcome-hero p');
  if (welcomeText) {
    welcomeText.textContent = `Bem-vindo, ${roleName}! Controle total do seu estoque de chás e grãos em um único lugar`;
  }
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.site-nav a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    } else if (currentPage === 'home.html' && href === 'home.html') {
      link.classList.add('active');
    }
  });
}
