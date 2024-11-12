# Database Design - E-commerce Platform Schema


## Overview
This directory contains the SQL schema for the database design, including tables for Users, Products, Orders, and OrderItems.


## ERD
The ERD for the schema includes relationships between Users, Products, Orders, and OrderItems.


## Schema Details
### Users Table
- Stores user information with unique identifiers.


### Products Table
- Product details including name, price, and stock.


### Orders Table
- Tracks orders made by users.


### OrderItems Table
- Details of each product in an order.


## SQL Code
To create tables, run the SQL script in `schema.sql`.


```sql
-- schema.sql


CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    password_hash VARCHAR(255)
);


CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT
);
```
