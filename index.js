const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 4000;

// Setup mongoose
const dbSetup = require('./database/setup');
const bookRoutes = require('./routes/bookRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json());
dbSetup();

// Performance test code
const fs = require('fs');
const path = require('path');

const genre = 'fiction';

app.get('/', (req, res) => {
  const filename = path.join(__dirname, 'books.json');
  const data = fs.readFileSync(filename, 'utf-8');
  const books = JSON.parse(data);

  const filteredBooks = books.filter((book) => book.genre === genre);
  const sortedBooks = filteredBooks.sort((a, b) => b.published_date - a.published_date);

  const newFilename = path.join(__dirname, 'filtered_books.json');
  fs.writeFileSync(newFilename, JSON.stringify(sortedBooks, null, 2));

  res.send('Books filtered and sorted successfully');
});

app.use(bookRoutes);
app.use(userRoutes);



app.listen(port, () => { console.log(`App is listening on port ${port}`)});
