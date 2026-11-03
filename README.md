# Laboratory Work 7: React.js - Catalog Page & Routing

## Overview
The goal of this laboratory work is to extend the React application (**Variant 8: Helicopter**) by implementing a multi-page routing architecture using `react-router-dom`, developing a dedicated **Catalog Page** with items list, and modularizing interactive UI elements into reusable components (`PrimaryButton`, `SecondaryButton`, `Select`).

## Variant Specification (Variant 8)
- **Entity:** Helicopter
- **Attributes:**
  - `id` (number)
  - `name` (string)
  - `passengers` (number - passenger capacity)
  - `maxSpeed` (number - km/h)
  - `description` (string)

## Requirements & Implementation
- **Routing Architecture (`react-router-dom`):**
  - Integrated `react-router-dom` (v6) with `<BrowserRouter>`, `<Routes>`, and `<Route>` components.
  - Multi-page navigation between:
    - **Home Page (`/`)**: Overview hero banner, key aviation metrics, and featured helicopter models.
    - **Catalog Page (`/catalog`)**: Dedicated fleet catalog with controls bar, items grid, and action controls.
  - `<NavLink>` integration in the `Header` component enabling seamless client-side page switching with active navigation styling and zero page reloads.
- **Reusable UI Components:**
  - **`PrimaryButton`** (`src/components/ui/PrimaryButton/`): Reusable primary action button component (used for filters, search, "View More", and catalog triggers).
  - **`SecondaryButton`** (`src/components/ui/SecondaryButton/`): Reusable secondary action button component (used for clear and reset actions).
  - **`Select`** (`src/components/ui/Select/`): Reusable form dropdown control supporting customizable labels, option lists, placeholders, and change events.
- **Catalog Page (`src/pages/Catalog/Catalog.jsx`):**
  - **Filter & Search Bar:** Features category dropdown, passenger capacity dropdown, sort dropdown, and search input with apply and reset buttons.
  - **Items Grid:** Dynamically renders the helicopter collection using **`Array.prototype.map()`** and passes individual record objects to the `HelicopterCard` component with a unique `key={helicopter.id}`.
  - **Bottom Pagination/Action:** Features a centralized "View More" `PrimaryButton`.
- **Code Style & Functional Components:**
  - 100% Functional Components with hooks and props.
  - Modular CSS stylesheets per component and page.
- **Functionality Scope:**
  - View-only presentation as specified in requirements (filter, search, and pagination functionality will be completed in subsequent laboratory works).

## Project Structure
```text
WebDev_lab/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── PrimaryButton/
│   │   │   │   ├── PrimaryButton.css
│   │   │   │   └── PrimaryButton.jsx
│   │   │   ├── SecondaryButton/
│   │   │   │   ├── SecondaryButton.css
│   │   │   │   └── SecondaryButton.jsx
│   │   │   └── Select/
│   │   │       ├── Select.css
│   │   │       └── Select.jsx
│   │   ├── CardsGrid/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HelicopterCard/
│   │   └── Sidebar/
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   └── Catalog/
│   │       ├── Catalog.css
│   │       └── Catalog.jsx
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
   - Navigate to `/` for the Home Page.
   - Navigate to `/catalog` for the Catalog Page.

3. **Build for production:**
   ```bash
   npm run build
   ```
