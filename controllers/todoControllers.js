const Todo = require('../models/todo');

module.exports.create = async (req,res)=>{
    const post = await Todo.create(req.body);
    console.log(post);
    return res.redirect('/');
}