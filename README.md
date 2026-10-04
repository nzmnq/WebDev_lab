# Laboratory Work 2: Responsive Web Design and CSS Animations

## Overview
The goal of this laboratory work is to make the landing page created in Laboratory Work 1 fully responsive across various screen resolutions and add interactive CSS animations.

## Requirements
- Implement responsive design using CSS Media Queries (`@media`).
- Ensure proper rendering on mobile screens down to 320px (iPhone 5s / SE) and large desktop displays up to 4K.
- Create an adaptive mobile navigation menu (burger menu) with open/close functionality.
- Implement CSS transitions and keyframe animations for interactive interface elements.
- Maintain smooth scaling and layout flexibility without horizontal overflow.

## Project Structure
- `data/index.html` - Landing page markup with responsive viewport and burger menu
- `css/` - Modular stylesheets
  - `animations.css` - CSS keyframes and transition definitions
  - `header.css` - Adaptive header and mobile navigation styles
  - `hero.css`, `storie.css`, `reviews.css`, `footer.css` - Responsive layout rules
  - `global.css`, `style.css` - Global styles and font imports
- `js/main.js` - Script handling mobile navigation toggle
- `assets/` - Visual assets and icons

## How to Run
Open `data/index.html` in any web browser and use Developer Tools (Device Toolbar) to test responsive behavior across different screen sizes.