# Laboratory Work 3: CRUD JavaScript Application - View Page

## Overview
The goal of this laboratory work is to implement dynamic content rendering and client-side data management for a helicopter catalog (Variant 8) using vanilla JavaScript.

## Variant 8
- Entity: Helicopter
- Attributes: Name, Description, Max Speed (km/h), Passenger Capacity

## Requirements
- Dynamically render helicopter cards from a JavaScript data collection using array methods (`map`).
- Implement real-time search and filtering (`filter`) by name and description.
- Implement sorting functionality (`sort`) by maximum speed with toggle state.
- Implement total passenger capacity calculation (`reduce`) displayed upon request.
- Separate DOM manipulation logic (`dom.js`) from application state and business logic (`main.js`).

## Project Structure
- `data/index.html` - Catalog view page markup
- `css/` - Modular styles (cards, sidebar, header, global)
- `js/`
  - `dom.js` - DOM element selection, card rendering, and UI updates
  - `main.js` - Data array, filter/sort/count handlers, and event listeners

## How to Run
Open `data/index.html` in a web browser or serve via Live Server.