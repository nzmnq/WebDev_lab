import { getAllhHeli, deleteHelicopter, getHelicoptersCount } from "./api.js";

let helicopters = [];
let isSorted = false;
let searchQuery = "";
let isCounted = false;

function getFilteredItems() {
  return [...helicopters];
}

function getProcessedItems() {
  const filtered = getFilteredItems();
  if (isSorted) {
    return filtered.sort((a, b) => b.maxSpeed - a.maxSpeed);
  }
  return filtered;
}

async function updateTotalPassengers() {
  try {
    const { totalPassengers } = await getHelicoptersCount(searchQuery);
    DOM.renderTotal(totalPassengers);
  } catch (err) {
    console.error(err);
  }
}

function updateView() {
  const items = getProcessedItems();
  DOM.renderCards(items);

  if (isCounted) {
    updateTotalPassengers();
  }
}

async function loadHelicopters(query = searchQuery) {
  try {
    helicopters = await getAllhHeli(query);
    updateView();
  } catch (err) {
    console.error(err);
  }
}

function initEventListeners() {
  if (DOM.searchBtn) {
    DOM.searchBtn.addEventListener("click", () => {
      searchQuery = DOM.getSearchValue();
      loadHelicopters(searchQuery);
    });
  }

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchQuery = DOM.getSearchValue();
        loadHelicopters(searchQuery);
      }
    });
  }

  if (DOM.clearBtn) {
    DOM.clearBtn.addEventListener("click", () => {
      DOM.clearSearchInput();
      searchQuery = "";
      loadHelicopters("");
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
      updateTotalPassengers();
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
