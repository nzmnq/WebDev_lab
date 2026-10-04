const DOM = {
  cardsGrid: document.getElementById("cards-grid"),
  searchInput: document.getElementById("search-input"),
  searchBtn: document.getElementById("search-btn"),
  clearBtn: document.getElementById("clear-btn"),
  sortToggle: document.getElementById("sort-toggle"),
  countBtn: document.getElementById("count-btn"),
  totalValueEl: document.getElementById("total-value"),

  renderCards(items) {
    if (!this.cardsGrid) return;

    if (items.length === 0) {
      this.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #777;">
          Вертольотів за запитом не знайдено.
        </div>
      `;
      return;
    }

    const cardsMarkup = items.map(heli => `
      <article class="card" data-id="${heli.id}">
        <div class="card__image">
          <span class="card__image-text">235x180</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${heli.name}</h3>
          <p class="card__desc">${heli.description}</p>
          <p class="card__specs">
            <strong>Макс. швидкість:</strong> ${heli.maxSpeed} км/год<br>
            <strong>Пасажири:</strong> ${heli.passengers} місць
          </p>
          <div class="card__updated">Last updated 3 mins ago</div>
          <div class="card__actions">
            <button type="button" class="btn-card-edit" data-id="${heli.id}">Edit</button>
            <button type="button" class="btn-card-remove" data-id="${heli.id}">Remove</button>
          </div>
        </div>
      </article>
    `).join("");

    this.cardsGrid.innerHTML = cardsMarkup;
  },

  renderTotal(total) {
    if (this.totalValueEl) {
      this.totalValueEl.textContent = `${total} місць`;
    }
  },

  setSortToggle(isActive) {
    if (this.sortToggle) {
      this.sortToggle.classList.toggle("active", isActive);
    }
  },

  getSearchValue() {
    return this.searchInput ? this.searchInput.value.trim() : "";
  },

  clearSearchInput() {
    if (this.searchInput) {
      this.searchInput.value = "";
    }
  }
};
