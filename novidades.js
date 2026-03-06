(() => {
  if (document.body?.dataset?.page !== "novidades") {
    return;
  }

  const grid = document.getElementById("novidades-grid");
  const chips = Array.from(document.querySelectorAll(".filter-chip"));
  const sortSelect = document.getElementById("sort-select");

  if (!grid || !sortSelect || chips.length === 0) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll(".product-card"));
  let activeCategory = "todas";

  const updateChips = () => {
    chips.forEach((chip) => {
      const isActive = chip.dataset.category === activeCategory;
      chip.classList.toggle("is-active", isActive);
      chip.classList.toggle("soft", !isActive);
    });
  };

  const updateGrid = () => {
    const sortMode = sortSelect.value;

    const visibleCards = cards.filter((card) => {
      const category = card.dataset.category;
      const isVisible = activeCategory === "todas" || category === activeCategory;
      card.style.display = isVisible ? "grid" : "none";
      return isVisible;
    });

    visibleCards.sort((a, b) => {
      const priceA = Number(a.dataset.price || 0);
      const priceB = Number(b.dataset.price || 0);
      const orderA = Number(a.dataset.order || 0);
      const orderB = Number(b.dataset.order || 0);

      if (sortMode === "price-asc") return priceA - priceB;
      if (sortMode === "price-desc") return priceB - priceA;
      return orderA - orderB;
    });

    visibleCards.forEach((card) => grid.appendChild(card));
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category || "todas";
      updateChips();
      updateGrid();
    });
  });

  sortSelect.addEventListener("change", updateGrid);

  updateChips();
  updateGrid();
})();
