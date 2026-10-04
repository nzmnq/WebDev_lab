import os
import json
import re
from http.server import HTTPServer, BaseHTTPRequestHandler

PORT = 3000
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.json")

def load_data():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

class RequestHandler(BaseHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors_headers()
        self.end_headers()

    def send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_cors_headers()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def read_body(self):
        content_length = int(self.headers.get("Content-Length", 0))
        if content_length == 0:
            return None
        body_bytes = self.rfile.read(content_length)
        return json.loads(body_bytes.decode("utf-8"))

    def do_GET(self):
        path = self.path.split("?")[0].rstrip("/")
        items = load_data()

        if path == "/api/helicopters":
            self.send_json(200, items)
            return

        match = re.match(r"^/api/helicopters/(\d+)$", path)
        if match:
            item_id = int(match.group(1))
            found = next((item for item in items if item.get("id") == item_id), None)
            if found:
                self.send_json(200, found)
            else:
                self.send_json(404, {"error": "Helicopter not found"})
            return

        self.send_json(404, {"error": "Not Found"})

    def do_POST(self):
        path = self.path.split("?")[0].rstrip("/")
        if path == "/api/helicopters":
            payload = self.read_body()
            if not payload:
                self.send_json(400, {"error": "Invalid JSON body"})
                return

            items = load_data()
            new_id = max([item.get("id", 0) for item in items], default=0) + 1
            payload["id"] = new_id
            items.append(payload)
            save_data(items)
            self.send_json(201, payload)
            return

        self.send_json(404, {"error": "Not Found"})

    def do_PUT(self):
        path = self.path.split("?")[0].rstrip("/")
        match = re.match(r"^/api/helicopters/(\d+)$", path)
        if match:
            item_id = int(match.group(1))
            payload = self.read_body()
            if not payload:
                self.send_json(400, {"error": "Invalid JSON body"})
                return

            items = load_data()
            for idx, item in enumerate(items):
                if item.get("id") == item_id:
                    payload["id"] = item_id
                    items[idx] = payload
                    save_data(items)
                    self.send_json(200, payload)
                    return

            self.send_json(404, {"error": "Helicopter not found"})
            return

        self.send_json(404, {"error": "Not Found"})

    def do_DELETE(self):
        path = self.path.split("?")[0].rstrip("/")
        match = re.match(r"^/api/helicopters/(\d+)$", path)
        if match:
            item_id = int(match.group(1))
            items = load_data()
            new_items = [item for item in items if item.get("id") != item_id]

            if len(new_items) == len(items):
                self.send_json(404, {"error": "Helicopter not found"})
                return

            save_data(new_items)
            self.send_json(200, {"message": f"Helicopter {item_id} deleted successfully"})
            return

        self.send_json(404, {"error": "Not Found"})

if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), RequestHandler)
    print(f"REST API server running at http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
