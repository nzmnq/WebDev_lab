import { getAllhHeli, deleteHelicopter } from "./api.js";

let helicopters = [];
let isSorted = false;
let searchQuery = "";
let isCounted = false;

function getFilteredItems() {
  const query = searchQuery.toLowerCase();
  if (!query) return [...helicopters];

  return helicopters.filter(heli => 
    heli.name.toLowerCase().includes(query) ||
    heli.description.toLowerCase().includes(query)
  );
}

function getProcessedItems() {
  const filtered = getFilteredItems();
  if (isSorted) {
    return filtered.sort((a, b) => b.maxSpeed - a.maxSpeed);
  }
  return filtered;
}

function calculateTotalPassengers(items) {
  return items.reduce((total, heli) => total + Number(heli.passengers || 0), 0);
}

function updateView() {
  const items = getProcessedItems();
  DOM.renderCards(items);

  if (isCounted) {
    const total = calculateTotalPassengers(items);
    DOM.renderTotal(total);
  }
}

async function loadHelicopters() {
  try {
    helicopters = await getAllhHeli();
    updateView();
  } catch (err) {
    console.error(err);
  }
}

function initEventListeners() {
  if (DOM.searchBtn) {
    DOM.searchBtn.addEventListener("click", () => {
      searchQuery = DOM.getSearchValue();
      updateView();
    });
  }

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchQuery = DOM.getSearchValue();
        updateView();
      }
    });
  }

  if (DOM.clearBtn) {
    DOM.clearBtn.addEventListener("click", () => {
      DOM.clearSearchInput();
      searchQuery = "";
      updateView();
    });
  }

  if (DOM.sortToggle) {
    DOM.sortToggle.addEventListener("click", () => {
      isSorted = !isSorted;
      DOM.setSortToggle(isSorted);
      updateView();
    });
  }

  if (DOM.countBtn) {
    DOM.countBtn.addEventListener("click", () => {
      isCounted = true;
      const items = getProcessedItems();
      const total = calculateTotalPassengers(items);
      DOM.renderTotal(total);
    });
  }

  if (DOM.cardsGrid) {
    DOM.cardsGrid.addEventListener("click", async (e) => {
      if (e.target.classList.contains("btn-card-remove")) {
        const id = Number(e.target.dataset.id);
        try {
          await deleteHelicopter(id);
          helicopters = helicopters.filter(heli => heli.id !== id);
          updateView();
        } catch (err) {
          console.error(err);
        }
      } else if (e.target.classList.contains("btn-card-edit")) {
        const id = Number(e.target.dataset.id);
        window.location.href = `./edit.html?id=${id}`;
      }
    });
  }
}

initEventListeners();
loadHelicopters();
