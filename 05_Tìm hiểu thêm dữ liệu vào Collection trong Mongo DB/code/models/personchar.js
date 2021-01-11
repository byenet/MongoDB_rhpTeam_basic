const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema and model 
const PersonSchema = new Schema({
    name: String,
    height: Number,
    weight: Number,
});

const PersonChar = mongoose.model('personchar', PersonSchema);

module.exports = PersonChar;