const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = 3000;
const DATA_FILE = path.join(__dirname, "data.json");

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

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (!body) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || `localhost:${PORT}`}`);
  const pathname = parsedUrl.pathname.replace(/\/+$/, "");

  if (req.method === "GET") {
    let items = loadData();
    const searchQuery =
      parsedUrl.searchParams.get("search") ||
      parsedUrl.searchParams.get("q") ||
      parsedUrl.searchParams.get("query") ||
      "";

    if (pathname === "/api/helicopters" || pathname === "/api/helicopters/search") {
      if (searchQuery) {
        items = searchHelicopters(items, searchQuery);
      }
      sendJson(res, 200, items);
      return;
    }

    if (pathname === "/api/helicopters/count" || pathname === "/api/helicopters/total-passengers") {
      if (searchQuery) {
        items = searchHelicopters(items, searchQuery);
      }
      sendJson(res, 200, {
        count: countHelicopters(items),
        totalPassengers: calculateTotalPassengers(items),
      });
      return;
    }

    const match = pathname.match(/^\/api\/helicopters\/(\d+)$/);
    if (match) {
      const itemId = Number(match[1]);
      const found = items.find((item) => item.id === itemId);
      if (found) {
        sendJson(res, 200, found);
      } else {
        sendJson(res, 404, { error: "Helicopter not found" });
      }
      return;
    }

    sendJson(res, 404, { error: "Not Found" });
    return;
  }

  if (req.method === "POST") {
    if (pathname === "/api/helicopters") {
      let payload;
      try {
        payload = await readBody(req);
      } catch {
        sendJson(res, 400, { error: "Invalid JSON body" });
        return;
      }

      if (!payload) {
        sendJson(res, 400, { error: "Invalid JSON body" });
        return;
      }

      const items = loadData();
      const maxId = items.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
      payload.id = maxId + 1;
      items.push(payload);
      saveData(items);
      sendJson(res, 201, payload);
      return;
    }

    sendJson(res, 404, { error: "Not Found" });
    return;
  }

  if (req.method === "PUT") {
    const match = pathname.match(/^\/api\/helicopters\/(\d+)$/);
    if (match) {
      const itemId = Number(match[1]);
      let payload;
      try {
        payload = await readBody(req);
      } catch {
        sendJson(res, 400, { error: "Invalid JSON body" });
        return;
      }

      if (!payload) {
        sendJson(res, 400, { error: "Invalid JSON body" });
        return;
      }

      const items = loadData();
      const idx = items.findIndex((item) => item.id === itemId);
      if (idx !== -1) {
        payload.id = itemId;
        items[idx] = payload;
        saveData(items);
        sendJson(res, 200, payload);
        return;
      }

      sendJson(res, 404, { error: "Helicopter not found" });
      return;
    }

    sendJson(res, 404, { error: "Not Found" });
    return;
  }

  if (req.method === "DELETE") {
    const match = pathname.match(/^\/api\/helicopters\/(\d+)$/);
    if (match) {
      const itemId = Number(match[1]);
      const items = loadData();
      const newItems = items.filter((item) => item.id !== itemId);

      if (newItems.length === items.length) {
        sendJson(res, 404, { error: "Helicopter not found" });
        return;
      }

      saveData(newItems);
      sendJson(res, 200, { message: `Helicopter ${itemId} deleted successfully` });
      return;
    }

    sendJson(res, 404, { error: "Not Found" });
    return;
  }

  sendJson(res, 404, { error: "Not Found" });
});

if (require.main === module) {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
  });
}

module.exports = {
  server,
  loadData,
  saveData,
  searchHelicopters,
  countHelicopters,
  calculateTotalPassengers,
};
