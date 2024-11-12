# Backend - Product Management API


## Overview
A RESTful API for product management with JWT-based authentication.


## Endpoints
- `GET /products`: Fetch all products.
- `POST /products`: Add a new product (JWT required).
- `PATCH /products/:id`: Update product details (JWT required).
- `DELETE /products/:id`: Remove a product (JWT required).


## Setup
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   node server.js
   ```


4. To test authentication, generate a JWT token (use Postman or any other tool).


## Authentication
JWT-based authentication is implemented in `middlewares/auth.js`. Secure routes require a valid token.


## Performance
Caching and pagination are implemented to handle high-traffic scenarios.


