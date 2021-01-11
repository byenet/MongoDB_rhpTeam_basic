const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema and Model
const bookSchema = new Schema({
    title: String,
    numberOfPages: Number,
})

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [bookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;