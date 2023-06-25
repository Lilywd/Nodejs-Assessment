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


app.use(bookRoutes);
app.use(userRoutes);



app.listen(port, () => { console.log(`App is listening on port ${port}`)});