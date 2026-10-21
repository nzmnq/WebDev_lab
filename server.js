const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
app.use(express.json());

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

function searchHelicopters(items, query) {
  if (!query) {
    return items;
  }
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return items;
  }
  return items.filter(
    (item) =>
      String(item.name || "").toLowerCase().includes(normalizedQuery) ||
      String(item.description || "").toLowerCase().includes(normalizedQuery)
  );
}

function countHelicopters(items) {
  return items.length;
}

function calculateTotalPassengers(items) {
  return items.reduce((sum, item) => sum + (Number(item.passengers) || 0), 0);
}

function getSearchParam(req) {
  return req.query.search || req.query.q || req.query.query || "";
}

app.get(["/api/helicopters", "/api/helicopters/search"], (req, res) => {
  let items = loadData();
  const searchQuery = getSearchParam(req);
  if (searchQuery) {
    items = searchHelicopters(items, searchQuery);
  }
  res.status(200).json(items);
});

app.get(["/api/helicopters/count", "/api/helicopters/total-passengers"], (req, res) => {
  let items = loadData();
  const searchQuery = getSearchParam(req);
  if (searchQuery) {
    items = searchHelicopters(items, searchQuery);
  }
  res.status(200).json({
    count: countHelicopters(items),
    totalPassengers: calculateTotalPassengers(items),
  });
});

app.get("/api/helicopters/:id", (req, res) => {
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

  const items = loadData();
  const maxId = items.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
  payload.id = maxId + 1;
  items.push(payload);
  saveData(items);
  res.status(201).json(payload);
});

app.put("/api/helicopters/:id", (req, res) => {
  const itemId = Number(req.params.id);
  const payload = req.body;
  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const items = loadData();
  const idx = items.findIndex((item) => item.id === itemId);
  if (idx !== -1) {
    payload.id = itemId;
    items[idx] = payload;
    saveData(items);
    return res.status(200).json(payload);
  }

  res.status(404).json({ error: "Helicopter not found" });
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
  searchHelicopters,
  countHelicopters,
  calculateTotalPassengers,
};
