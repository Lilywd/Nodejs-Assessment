const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/bookstore";

module.exports = () => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection to database Successful...");
    }).catch((err) => {
        console.log(err);
    });
};