const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Define the _id field as an ObjectId
    id: { type: mongoose.ObjectId }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;