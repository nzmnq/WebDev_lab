const INITIAL_HELICOPTERS = [
  {
    id: 1,
    name: "Sikorsky UH-60",
    passengers: 14,
    maxSpeed: 295,
    description: "Багатоцільовий тактичний вертоліт армії США, розроблений для десантування та евакуації."
  },
  {
    id: 2,
    name: "Boeing CH-47 Chinook",
    passengers: 55,
    maxSpeed: 315,
    description: "Важкий військово-транспортний вертоліт із двома поздовжніми гвинтами для великих вантажів."
  },
  {
    id: 3,
    name: "Eurocopter EC135",
    passengers: 7,
    maxSpeed: 287,
    description: "Легкий дводвигуновий багатоцільовий вертоліт, популярний у поліцейських та рятувальних службах."
  },
  {
    id: 4,
    name: "Bell 206 JetRanger",
    passengers: 4,
    maxSpeed: 222,
    description: "Один із наймасовіших і найнадійніших комерційних вертольотів у світовій цивільній авіації."
  },
  {
    id: 5,
    name: "AgustaWestland AW101",
    passengers: 30,
    maxSpeed: 309,
    description: "Середній багатоцільовий трьохдвигуновий вертоліт для пошуково-рятувальних операцій."
  }
];

let helicopters = [...INITIAL_HELICOPTERS];
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
    DOM.cardsGrid.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-card-remove")) {
        const id = Number(e.target.dataset.id);
        helicopters = helicopters.filter(heli => heli.id !== id);
        updateView();
      } else if (e.target.classList.contains("btn-card-edit")) {
        const id = Number(e.target.dataset.id);
        const heli = helicopters.find(h => h.id === id);
        if (heli) {
          const params = new URLSearchParams({
            name: heli.name,
            speed: heli.maxSpeed,
            pass: heli.passengers,
            desc: heli.description
          });
          window.location.href = `./edit.html?${params.toString()}`;
        }
      }
    });
  }
}

initEventListeners();
updateView();
