const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, max_length: 255 },
    author: { type: String, required: true, max_length: 255 },
    genre: { type: String, required: true, max_length: 255 },
    published_date: { type: Date },
    description: { type: String },

    // Define the _id field as an ObjectId
    id: { type: mongoose.ObjectId }
});


const Book = mongoose.model('Book', BookSchema);

module.exports = Book;