const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const book = require('./book.model');
const user = require('./user.model');

// Create the Express app
const app = express();



// Connect to the database
mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true });

// Import the models
const Book = mongoose.model('Book', book);
const User = mongoose.model('User', user);


// Create a route to create a new book
app.post('/books', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        published_date: req.body.published_date,
        description: req.body.description
    });

    // Save the book record to the database
    await book.save();

    // Return the book record
    res.json(book);
});

// Create a route to retrieve a specific book by its ID
app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);

    // Return the book record
    res.json(book);
});

// Create a route to update an existing book
app.put('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);

    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.published_date = req.body.published_date;
    book.description = req.body.description;

    // Save the book record to the database
    await book.save();

    // Return the book record
    res.json(book);
});

// Create a route to delete a book
app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

    // Return the book record
    res.json(book);
});

// Create a route to register a new user
app.post('/api/register', async (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    // Check if the username already exists
    const existingUser = await User.findOne({ username: user.username });
    if (existingUser) {
        res.status(400).json({ error: 'Username already exists' });
        return;
    }

    // Check if the email already exists
    const existingEmail = await User.findOne({ email: user.email });
    if (existingEmail) {
        res.status(400).json({ error: 'Email already exists' });
        return;
    }

    // Create the user record in the database
    const newUser = new User(user);
    await newUser.save();

    // Generate a JWT for the user
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return the JWT to the user
    res.json({ token });
});
app.post('/api/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    // Check if the username and password are valid
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
  
    // Generate a JWT for the user
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    // Return the JWT to the user
    res.json({ token });
  });
  

// Start the Express server
app.listen(3000, () => console.log('Server started on port 3000'));