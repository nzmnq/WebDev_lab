# Web Development Laboratory Works

## Overview
This repository contains laboratory assignments for the Web Development course. The project progressively evolves from static web markup to an adaptive landing page, followed by a full-fledged client-side CRUD application with asynchronous REST API backend integration.

## Variant Specification
- Variant: 8
- Entity: Helicopter
- Attributes:
  - Name (string)
  - Description (string)
  - Max Speed in km/h (number)
  - Passenger Capacity (number)

## Laboratory Works Overview

### Laboratory Work 1: Static Landing Page Markup and Styling (branch: lab1)
- Implementation of a static multi-section landing page based on a design template.
- Semantic HTML5 structure (header, hero, stories, reviews, footer).
- Modular CSS architecture with CSS variables and Flexbox layout.

### Laboratory Work 2: Responsive Web Design and CSS Animations (branch: lab2)
- Adaptive layout using CSS Media Queries supporting resolutions from 320px (iPhone 5s) up to 4K displays.
- Interactive mobile navigation (burger menu) with smooth toggle transitions.
- Keyframe animations and interactive hover effects.

### Laboratory Work 3: CRUD JavaScript Application - View Page (branch: lab3)
- Dynamic helicopter card rendering using `Array.prototype.map`.
- Real-time search and filtering by text query using `Array.prototype.filter`.
- Speed-based sorting toggle using `Array.prototype.sort`.
- Total passenger capacity calculation using `Array.prototype.reduce`.
- Architecture separation between DOM operations (`dom.js`) and state management (`main.js`).

### Laboratory Work 4: CRUD JavaScript Application - Create and Edit Pages (branch: lab4)
- Dedicated helicopter creation (`create.html`) and editing (`edit.html`) pages.
- Dual-layer form validation combining HTML5 attributes and custom JavaScript logic.
- Custom styled modal dialog for displaying validation error feedback.
- Prefilling edit form fields via URL query parameters using `URLSearchParams`.

### Laboratory Work 5: CRUD JavaScript Application - Backend REST API (branch: lab5)
- REST API server (`server.py`) handling standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
- Persistent data storage backed by `data.json`.
- Full Cross-Origin Resource Sharing (CORS) support.
- Modular client-side API requests using the Fetch API and ES modules (`js/api.js`).
- Complete integration of all CRUD operations across the user interface.

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+, ES Modules)
- Backend: Python 3 HTTP Server (REST API)
- Storage: JSON (`data.json`)
- Version Control: Git

## Getting Started

### Navigating Branches
Each laboratory work is implemented in its respective Git branch:
```bash
git checkout lab1
git checkout lab2
git checkout lab3
git checkout lab4
git checkout lab5
```

### Running the Application

#### Labs 1 to 4 (Frontend only):
Open `data/index.html` in a web browser or run with Live Server:
```bash
# Example with VS Code Live Server or python http server
python3 -m http.server 5500
```

#### Lab 5 (Full-Stack with REST API):
1. Start the backend server:
   ```bash
   python3 server.py
   ```
   The API will be available at `http://127.0.0.1:3000/api/helicopters`.

2. Open `data/index.html` using a local web server (e.g., Live Server on port 5500).