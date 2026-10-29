# Laboratory Work 6: React.js - Home Page

## Overview
The goal of this laboratory work is to initiate the development of a modern e-commerce React.js web application for browsing and acquiring helicopters (**Variant 8: Helicopter**), continuing from previous laboratory assignments (3–5).

The application features a complete, responsive **Home Page** following standard e-commerce wireframes, built entirely using **Functional Components** and modular CSS styling.

## Variant Specification (Variant 8)
- **Entity:** Helicopter
- **Attributes:**
  - `id` (number)
  - `name` (string)
  - `category` (string)
  - `passengers` (number - capacity)
  - `maxSpeed` (number - km/h)
  - `price` (string - USD)
  - `rating` (number)
  - `description` (string)
  - `image` (string - visual media asset)
  - `featured` (boolean)

## Requirements & Implementation
- **React.js Mark-up:** All user interface mark-up is rendered dynamically via React JSX. The root `public/index.html` file remains untouched with a standard `<div id="root"></div>` mount container.
- **Base Project Architecture:** Built on the standard Create React App (CRA) structure with `react-scripts`.
- **Wireframe Compliance:** The Home page incorporates all essential wireframe sections:
  - **Header & Navigation:** Branding with animated rotor icon, navigation links, quick search placeholder, shopping cart indicator, and action button.
  - **Hero Banner:** Compelling headline, value proposition, primary and secondary call-to-action buttons, key operational metrics, and flagship model showcase card.
  - **Features / Standards:** 4 highlight cards covering airworthiness certification, global delivery, performance capabilities, and 24/7 MRO technical maintenance.
  - **Helicopter Catalog Preview:** Dynamic helicopter grid rendered via `.map()` using separate card components, complete with category tags, specs, pricing, and action buttons.
  - **Footer:** Brand mission, multi-column navigation, fleet links, aviation hub contact information, and copyright/legal notices.
- **Component Architecture:** UI elements are logically divided into separate files (8 functional components):
  1. `Header` (`src/components/Header/Header.jsx`)
  2. `Hero` (`src/components/Hero/Hero.jsx`)
  3. `Features` (`src/components/Features/Features.jsx`)
  4. `FeatureCard` (`src/components/Features/FeatureCard.jsx`)
  5. `HelicopterCard` (`src/components/HelicopterCard/HelicopterCard.jsx`)
  6. `HelicopterList` (`src/components/HelicopterList/HelicopterList.jsx`)
  7. `Footer` (`src/components/Footer/Footer.jsx`)
  8. `App` (`src/App.jsx`)
- **Functional Components:** All components are written strictly as React Functional Components with props.
- **Design & Styling:** Custom modular CSS with modern dark aviation theme, CSS variables, CSS Grid, Flexbox, smooth transitions, and responsive breakpoints.
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
│   │   ├── Features/
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── Features.css
│   │   │   └── Features.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── HelicopterCard/
│   │   │   ├── HelicopterCard.css
│   │   │   └── HelicopterCard.jsx
│   │   ├── HelicopterList/
│   │   │   ├── HelicopterList.css
│   │   │   └── HelicopterList.jsx
│   │   └── Hero/
│   │       ├── Hero.css
│   │       └── Hero.jsx
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