const mongoose  = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        required:true,
        default:false
    }
});

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;