document.addEventListener('DOMContentLoaded', function() {
  const registerBtn = document.querySelector('.hero-actions .primary-button');
  const inventoryBtn = document.querySelector('.hero-actions .outline-button');

  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      alert('Formulário de registro de entrada abriria aqui.');
    });
  }

  if (inventoryBtn) {
    inventoryBtn.addEventListener('click', function() {
      alert('Gerador de inventário ativado.');
    });
  }

  const categoryChips = document.querySelectorAll('.chip-group .chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', function() {
      categoryChips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
