const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo',{useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connection to db'));
db.once('open',()=>{
    console.log('Successfully connected to the database');
});

module.exports=db;