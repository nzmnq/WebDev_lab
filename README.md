# Laboratory Work 4: CRUD JavaScript Application - Create and Edit Pages

## Overview
The goal of this laboratory work is to extend the CRUD application by adding Create and Edit pages with comprehensive form validation and custom feedback modals.

## Requirements
- Create dedicated pages for adding (`create.html`) and editing (`edit.html`) helicopter records.
- Implement dual-layer validation:
  - HTML5 attribute-based validation (`required`, `minlength`, `maxlength`, `min`, `max`, `step`).
  - JavaScript custom validation checking input values before form submission.
- Display validation error messages using a styled custom modal window.
- Pass existing helicopter parameters to the edit page using `URLSearchParams` and prefill form fields.
- Prevent default form submission (`event.preventDefault()`) on invalid input.

## Project Structure
- `data/`
  - `index.html` - Main catalog page
  - `create.html` - Helicopter creation form
  - `edit.html` - Helicopter editing form
- `css/` - Form, modal, and layout styles
- `js/`
  - `modal.js` - Reusable modal window controller
  - `create.js` - Create form handling and validation logic
  - `edit.js` - Edit form prefilling and validation logic
  - `dom.js`, `main.js` - Catalog logic and event listeners

## How to Run
Open `data/index.html` in a web browser. Use navigation links to access the Create page and card edit buttons to access the Edit page.