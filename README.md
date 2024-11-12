# Full Stack Test Solution

This project contains the solution for a full stack test, covering frontend, backend, database design, system design, and a problem-solving task.

## Structure

- `frontend/`: React-based e-commerce product listing interface with filtering and sorting.
- `backend/`: RESTful API with JWT authentication for product management.
- `database/`: Database schema design and SQL code.
- `system-design/`: System architecture and documentation.
- `problem-solving/`: Solution to the product budget problem.

## Instructions

1. **Frontend**: See `frontend/README.md` for setup and usage.
2. **Backend**: Refer to `backend/README.md` for API setup.
3. **Database**: See `database/README.md` for schema and design.
4. **System Design**: Overview and diagram are in `system-design/`.
5. **Problem-Solving**: Solution details in `problem-solving/`.

---

### Frontend README.md

```markdown
# Frontend - Product Listing Interface

## Overview
This React-based frontend displays a product list with filtering, sorting, and responsive design. The interface is accessible with ARIA roles and keyboard navigation.

## Setup
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

## Components
- **App.js**: Main app component.
- **ProductList.js**: Displays product list with sorting/filtering.
- **ProductItem.js**: Component for individual product cards.


## Accessibility
- Uses ARIA roles and labels.
- Ensures keyboard navigation compatibility.