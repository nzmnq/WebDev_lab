# Laboratory Work 6: React.js - Home Page

## Overview
The goal of this laboratory work is to migrate the helicopter catalog web application (**Variant 8: Helicopter**) developed in Laboratory Work 5 into a modern **React.js** single-page application structure.

The Home page replicates the exact visual design, layout, and structure of Laboratory Work 5 (header, management sidebar, and helicopter cards grid) using modular React **Functional Components** and dedicated CSS stylesheets.

## Variant Specification (Variant 8)
- **Entity:** Helicopter
- **Attributes:**
  - `id` (number)
  - `name` (string)
  - `passengers` (number - passenger capacity)
  - `maxSpeed` (number - km/h)
  - `description` (string)

## Requirements & Implementation
- **React.js Mark-up:** All HTML markup is rendered exclusively via React JSX. The root `public/index.html` file remains untouched with the standard `<div id="root"></div>` mount node.
- **Base Project Architecture:** Built using standard Create React App (CRA) structure with `react-scripts`.
- **Wireframe & Design Compliance:** Replicates the exact layout from Laboratory Work 5:
  - **Header (`Header`):** Brand name (`MyHeli`), navigation menu (`My Helicopters`, `Create Helicopter`), search input (`search-input`), and `Search`/`Clear` action buttons.
  - **Sidebar (`Sidebar`):** Management controls including speed sort toggle switch, total passenger capacity calculation button, and total passenger display.
  - **Cards Grid (`CardsGrid`):** Container for rendering helicopter cards via `Array.prototype.map()`.
  - **Helicopter Card (`HelicopterCard`):** Displays helicopter placeholder image (`235x180`), title, description, technical specs (max speed, passenger capacity), update status timestamp, and action buttons (`Edit`, `Remove`).
  - **Footer (`Footer`):** Footer element providing branding, navigation links, and copyright notice.
- **Component Architecture:** UI elements are logically divided into separate files (5 dedicated component folders + App):
  1. `Header` (`src/components/Header/Header.jsx`, `Header.css`)
  2. `Sidebar` (`src/components/Sidebar/Sidebar.jsx`, `Sidebar.css`)
  3. `CardsGrid` (`src/components/CardsGrid/CardsGrid.jsx`, `CardsGrid.css`)
  4. `HelicopterCard` (`src/components/HelicopterCard/HelicopterCard.jsx`, `HelicopterCard.css`)
  5. `Footer` (`src/components/Footer/Footer.jsx`, `Footer.css`)
  6. `App` (`src/App.jsx`, `App.css`)
- **Functional Components:** All components are written strictly as React Functional Components with props.
- **Styling:** CSS modular styling matching the clean typography, dimensions, and color palette of Laboratory Work 5.
- **Functionality Scope:** View-only presentation as required for Lab 6.

## Project Structure
```text
WebDev_lab/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CardsGrid/
│   │   │   ├── CardsGrid.css
│   │   │   └── CardsGrid.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── HelicopterCard/
│   │   │   ├── HelicopterCard.css
│   │   │   └── HelicopterCard.jsx
│   │   └── Sidebar/
│   │       ├── Sidebar.css
│   │       └── Sidebar.jsx
│   ├── data/
│   │   └── helicopters.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```