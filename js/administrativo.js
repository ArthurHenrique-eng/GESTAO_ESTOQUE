document.addEventListener('DOMContentLoaded', function() {
  const newReportBtn = document.querySelector('.hero-actions .primary-button');
  const exportBtn = document.querySelector('.hero-actions .outline-button');

  if (newReportBtn) {
    newReportBtn.addEventListener('click', function() {
      alert('Gerador de relatórios abriria aqui.');
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      alert('Dados exportados com sucesso!');
    });
  }

  const priorityChips = document.querySelectorAll('.chip-group .chip');
  priorityChips.forEach(chip => {
    chip.addEventListener('click', function() {
      priorityChips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
