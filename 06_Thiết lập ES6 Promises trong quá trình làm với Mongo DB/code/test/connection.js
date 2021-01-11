const mongoose = require('mongoose');

// ES6 Promise
mongoose.Promise = global.Promise;

// Connect to mongodb
before((done) => {
    mongoose.connect("mongodb://localhost/personals");

    mongoose.connection
      .once("open", () => {
        console.log("Ket noi thanh cong");
        done();
      })
      .on("error", (err) => {
        console.log("Ket noi that bai ", err);
      });
})

// SQL DB: Table, Row, Column, Joins, Primary Key

// MongoDB: Collection, Document, Field, Embedded Documents/linking, Primary Key 