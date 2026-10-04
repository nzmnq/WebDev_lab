# Laboratory Work 5: CRUD JavaScript Application - Backend REST API

## Overview
The goal of this laboratory work is to integrate the frontend application with a backend REST API server, implementing persistent Create, Read, Update, and Delete operations using standard HTTP methods.

## Requirements
- Implement a backend REST API supporting standard HTTP methods:
  - `GET /api/helicopters` - Retrieve all helicopter records
  - `GET /api/helicopters/:id` - Retrieve a single helicopter by ID
  - `POST /api/helicopters` - Create a new helicopter record
  - `PUT /api/helicopters/:id` - Update an existing helicopter record
  - `DELETE /api/helicopters/:id` - Delete a helicopter record
- Persist data in a `data.json` file on the server.
- Enable Cross-Origin Resource Sharing (CORS) headers to allow requests from the client.
- Structure client-side requests in `js/api.js` using asynchronous `fetch` and ES modules.
- Connect all frontend pages (`main.js`, `create.js`, `edit.js`) to the backend API.

## Project Structure
- `server.py` - Lightweight REST API server with CORS support
- `data.json` - Persistent JSON data storage
- `js/`
  - `api.js` - Asynchronous HTTP request module (CRUD operations)
  - `main.js` - Catalog rendering, search, sort, and deletion via API
  - `create.js` - Form validation and creation via API
  - `edit.js` - Fetching record by ID and updating via API
  - `dom.js`, `modal.js` - UI utilities and modal window controller
- `data/` - HTML pages (`index.html`, `create.html`, `edit.html`)
- `css/` - Modular stylesheets

## How to Run
1. Start the REST API server:
   ```bash
   python3 server.py
   ```
   The server will start at `http://127.0.0.1:3000`.

2. Open `data/index.html` using Live Server (e.g., `http://127.0.0.1:5500`) or any local HTTP server.