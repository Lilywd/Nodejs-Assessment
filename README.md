#### 1. Coding Test

##### a) Create a RESTful API using Express.js that allows users to manage a collection of 
books. The API should support the following operations:
• Create a new book.
• Retrieve a specific book by its ID.
• Update an existing book.
• Delete a book.

##### b) Implement database integration using an ORM (Object-Relational Mapping) library 
such as Sequelize
or Mongoose. Design the book schema with the following properties:
• ID (auto-generated)
• Title (string)
• Author (string)
• Genre (string)
• Published Date (date)
• Description (text)
##### c) Add authentication and authorization to the API using JSON Web Tokens (JWT). 
Implement the following:
• User registration endpoint (/api/register) to create a new user.
• User login endpoint (/api/login) to authenticate and generate a JWT.
• Protect the book management endpoints by verifying the JWT.

#### 2. Performance Test: Given a dataset of 100,000 books in JSON format, write a 
script that performs the following tasks efficiently:
a) Reads the dataset from a file. 
b) Filters the books based on a specific genre. 
c) Sorts the filtered books
by the published date in descending order. 
d) Writes the sorted books to a new file in JSON format.
The script should be optimized to handle large datasets efficiently and 
minimize memory usage.

 #### 3. Database Optimization:
Assume you have an existing PostgreSQL database with a table named "orders" that 
has the following columns: 
• id (integer), 
• customer_id (integer), 
• order_date (date), 
• total_amount (decimal).
Optimize the following SQL query to improve its performance:
sqlCopy code
SELECT * FROM orders WHERE customer_id = 123 ORDER BY order_date DESC;

#### 4. System Design:
Imagine you are building a microservices architecture for an e-commerce platform. 
The system should handle the following functionalities:
• User management (registration, authentication, and authorization).
Product catalog (creation, retrieval, and updating product information).
• Shopping cart management (add/remove items, calculate total price).
• Order processing (place an order, payment integration).
• Describe the high-level architecture of the system, including the 
communication between microservices, data storage, and any other 
components needed.

#### 5. Debugging Test: 
Given a Node.js application that is failing to start and throws an 
error, analyze the provided error message, review the codebase, and identify and fix 
the issue causing the error.