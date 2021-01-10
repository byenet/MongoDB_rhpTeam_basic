const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect("mongodb://localhost/todoList");

mongoose.connection.once('open', ()=> {
    console.log("Ket noi thanh cong");
}).on('error', (err) => {
    console.log("Ket noi that bai ", err);
})