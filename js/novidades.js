document.addEventListener('DOMContentLoaded', function() {
  const filterChips = document.querySelectorAll('.filter-chip');
  const sortSelect = document.getElementById('sort-select');
  const novuidadesGrid = document.getElementById('novidades-grid');
  const cards = document.querySelectorAll('.product-card');

  let currentFilter = 'todas';
  let currentSort = 'latest';

  filterChips.forEach(chip => {
    chip.addEventListener('click', function() {
      filterChips.forEach(c => c.classList.remove('is-active'));
      this.classList.add('is-active');
      currentFilter = this.dataset.category;
      filterAndSortCards();
    });
  });

  sortSelect.addEventListener('change', function() {
    currentSort = this.value;
    filterAndSortCards();
  });

  function filterAndSortCards() {
    let filteredCards = Array.from(cards).filter(card => {
      if (currentFilter === 'todas') return true;
      return card.dataset.category === currentFilter;
    });

    filteredCards.sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);
      const orderA = parseInt(a.dataset.order);
      const orderB = parseInt(b.dataset.order);

      switch(currentSort) {
        case 'latest':
          return orderA - orderB;
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        default:
          return 0;
      }
    });

    novuidadesGrid.innerHTML = '';
    filteredCards.forEach(card => {
      novuidadesGrid.appendChild(card.cloneNode(true));
    });

    addButtonListeners();
  }

  function addButtonListeners() {
    document.querySelectorAll('.product-card .primary-button').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.product-card');
        const productName = card.querySelector('h2').textContent;
        const productPrice = card.querySelector('.product-price').textContent;
        alert(`${productName} - ${productPrice} adicionado ao carrinho!`);
      });
    });
  }

  addButtonListeners();
});
