const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;
const API_DELAY_MS = Number(process.env.API_DELAY_MS ?? 350);
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
app.use(express.json());

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function filterHelicopters(items, { category, capacity, search } = {}) {
  return items.filter((item) => {
    if (category && category !== "all") {
      const normalizedCategory = String(category).trim().toLowerCase();
      if (String(item.category || "").toLowerCase() !== normalizedCategory) {
        return false;
      }
    }

    if (capacity && capacity !== "all") {
      const passengers = Number(item.passengers);
      if (capacity === "small" && passengers > 10) {
        return false;
      }
      if (capacity === "medium" && (passengers <= 10 || passengers > 30)) {
        return false;
      }
      if (capacity === "large" && passengers <= 30) {
        return false;
      }
    }

    if (search) {
      const normalizedQuery = String(search).trim().toLowerCase();
      if (normalizedQuery) {
        const matchName = String(item.name || "").toLowerCase().includes(normalizedQuery);
        const matchDesc = String(item.description || "").toLowerCase().includes(normalizedQuery);
        if (!matchName && !matchDesc) {
          return false;
        }
      }
    }

    return true;
  });
}

function getSearchParam(req) {
  return req.query.search || req.query.q || req.query.query || "";
}

function getFilterParams(req) {
  return {
    category: req.query.category,
    capacity: req.query.capacity,
    search: getSearchParam(req),
  };
}

app.get(["/api/helicopters", "/api/helicopters/search"], async (req, res) => {
  if (API_DELAY_MS > 0) {
    await wait(API_DELAY_MS);
  }
  const items = filterHelicopters(loadData(), getFilterParams(req));
  res.status(200).json(items);
});

app.get(["/api/helicopters/count", "/api/helicopters/total-passengers"], async (req, res) => {
  if (API_DELAY_MS > 0) {
    await wait(API_DELAY_MS);
  }
  const items = filterHelicopters(loadData(), getFilterParams(req));
  const totalPassengers = items.reduce((sum, item) => sum + (Number(item.passengers) || 0), 0);
  res.status(200).json({
    count: items.length,
    totalPassengers,
  });
});

app.get("/api/helicopters/:id", async (req, res) => {
  if (API_DELAY_MS > 0) {
    await wait(API_DELAY_MS);
  }
  const itemId = Number(req.params.id);
  const items = loadData();
  const found = items.find((item) => item.id === itemId);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ error: "Helicopter not found" });
  }
});

app.post("/api/helicopters", (req, res) => {
  const payload = req.body;
  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const hasName = typeof payload.name === "string" && payload.name.trim().length > 0;
  const hasDescription =
    typeof payload.description === "string" && payload.description.trim().length > 0;
  const maxSpeedNum = Number(payload.maxSpeed);
  const passengersNum = Number(payload.passengers);

  if (
    !hasName ||
    !hasDescription ||
    payload.maxSpeed === undefined ||
    payload.maxSpeed === null ||
    payload.maxSpeed === "" ||
    Number.isNaN(maxSpeedNum) ||
    payload.passengers === undefined ||
    payload.passengers === null ||
    payload.passengers === "" ||
    Number.isNaN(passengersNum)
  ) {
    return res.status(400).json({
      error: "Missing or invalid required fields (name, description, maxSpeed, passengers)",
    });
  }

  const items = loadData();
  const maxId = items.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
  const newItem = {
    id: maxId + 1,
    name: payload.name.trim(),
    category: payload.category ? String(payload.category).trim() : "civilian",
    passengers: passengersNum,
    maxSpeed: maxSpeedNum,
    description: payload.description.trim(),
    image: payload.image ? String(payload.image).trim() : "",
  };

  items.push(newItem);
  saveData(items);
  res.status(201).json(newItem);
});

app.put("/api/helicopters/:id", (req, res) => {
  const itemId = Number(req.params.id);
  const payload = req.body;
  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const items = loadData();
  const idx = items.findIndex((item) => item.id === itemId);
  if (idx === -1) {
    return res.status(404).json({ error: "Helicopter not found" });
  }

  const updated = {
    ...items[idx],
    ...payload,
    id: itemId,
  };

  if (payload.name !== undefined) {
    updated.name = String(payload.name).trim();
  }
  if (payload.description !== undefined) {
    updated.description = String(payload.description).trim();
  }
  if (payload.category !== undefined) {
    updated.category = String(payload.category).trim();
  }
  if (payload.image !== undefined) {
    updated.image = String(payload.image).trim();
  }
  if (payload.maxSpeed !== undefined) {
    const maxSpeedNum = Number(payload.maxSpeed);
    if (Number.isNaN(maxSpeedNum)) {
      return res.status(400).json({ error: "Invalid maxSpeed" });
    }
    updated.maxSpeed = maxSpeedNum;
  }
  if (payload.passengers !== undefined) {
    const passengersNum = Number(payload.passengers);
    if (Number.isNaN(passengersNum)) {
      return res.status(400).json({ error: "Invalid passengers" });
    }
    updated.passengers = passengersNum;
  }

  items[idx] = updated;
  saveData(items);
  return res.status(200).json(updated);
});

app.delete("/api/helicopters/:id", (req, res) => {
  const itemId = Number(req.params.id);
  const items = loadData();
  const newItems = items.filter((item) => item.id !== itemId);

  if (newItems.length === items.length) {
    return res.status(404).json({ error: "Helicopter not found" });
  }

  saveData(newItems);
  res.status(200).json({ message: `Helicopter ${itemId} deleted successfully` });
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
  });
}

module.exports = {
  app,
  loadData,
  saveData,
  filterHelicopters,
};
