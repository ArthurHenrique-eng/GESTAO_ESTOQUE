document.addEventListener('DOMContentLoaded', function() {
  const newSaleBtn = document.querySelector('.hero-actions .primary-button');
  const vipClientsBtn = document.querySelector('.hero-actions .outline-button');

  if (newSaleBtn) {
    newSaleBtn.addEventListener('click', function() {
      alert('Formulário de nova venda abriria aqui.');
    });
  }

  if (vipClientsBtn) {
    vipClientsBtn.addEventListener('click', function() {
      alert('Filtro de clientes VIP ativado.');
    });
  }

  const chipFilters = document.querySelectorAll('.chip-group .chip');
  chipFilters.forEach(chip => {
    chip.addEventListener('click', function() {
      chipFilters.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
