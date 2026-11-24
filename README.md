# Laboratory Work 9: React.js - Connecting to REST API

## Overview
The goal of this laboratory work is to connect the React.js application (**Variant 8: Helicopter**) to a backend REST API server using `axios`, implementing full CRUD operations, URL-parameter filter queries on the Catalog page, and a pure CSS loading Spinner displayed while `GET` requests are in flight.

## Variant Specification (Variant 8)
- **Entity:** Helicopter
- **Attributes:**
  - `id` (number)
  - `name` (string)
  - `category` (string: `military`, `transport`, `rescue`, `civilian`)
  - `passengers` (number - passenger capacity)
  - `maxSpeed` (number - km/h)
  - `description` (string)
  - `image` (string)

## Requirements & Implementation
- **Backend REST API (`server.js` + `data.json`):**
  - Express.js REST server running on port `5001` (`http://localhost:5001/api`) with CORS enabled and JSON persistence in `data.json`.
  - Endpoints:
    - `GET /api/helicopters` — Retrieve helicopters with optional URL query filters (`category`, `capacity`, `search`)
    - `GET /api/helicopters/count` — Retrieve count and total passenger capacity
    - `GET /api/helicopters/:id` — Retrieve a single helicopter by ID
    - `POST /api/helicopters` — Create a new helicopter record
    - `PUT /api/helicopters/:id` — Update an existing helicopter record
    - `DELETE /api/helicopters/:id` — Delete a helicopter record
  - Configurable `GET` latency (`API_DELAY_MS`, default `350` ms) to demonstrate loading states.
- **Dedicated Axios API Layer (`src/api/helicoptersApi.js`):**
  - All HTTP requests use a configured `axios` instance (`getHelicopters`, `getHelicopterById`, `createHelicopter`, `updateHelicopter`, `deleteHelicopter`) with zero `fetch()` calls.
  - Catalog filters (`category`, `capacity`) are passed as URL query parameters via `axios` `params`.
- **Loading Spinner (`src/components/Spinner/`):**
  - Pure CSS circular spinner (`load8` style) rendered on Home, Catalog, Item, and Edit pages while `GET` requests are waiting for server responses.
- **Full CRUD & State Sync (`src/context/HelicoptersContext.jsx`):**
  - Fetches fleet data from the REST API on initialization (no hardcoded item array).
  - Supports Create (`/create`), Read (`/`, `/catalog`, `/item/:id`), Update (`/edit/:id`), and Delete (Catalog cards & Item page) backed by `data.json`.

## Project Structure
```text
WebDev_lab/
├── public/
│   └── images/
├── src/
│   ├── api/
│   │   └── helicoptersApi.js
│   ├── components/
│   │   ├── ui/
│   │   │   ├── PrimaryButton/
│   │   │   ├── SecondaryButton/
│   │   │   └── Select/
│   │   ├── CardsGrid/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HelicopterCard/
│   │   ├── HelicopterForm/
│   │   ├── Sidebar/
│   │   └── Spinner/
│   ├── context/
│   │   └── HelicoptersContext.jsx
│   ├── pages/
│   │   ├── Catalog/
│   │   ├── CreateHelicopter/
│   │   ├── EditHelicopter/
│   │   ├── Home/
│   │   └── ItemPage/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── data.json
├── package.json
├── server.js
└── README.md
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start both the REST API server and React frontend:**
   ```bash
   npm run dev
   ```
   Or run them in separate terminals:
   ```bash
   npm run server   # Starts Express REST API at http://localhost:5001
   npm start        # Starts React app at http://localhost:3000
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
