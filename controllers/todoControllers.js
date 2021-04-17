const Todo = require('../models/todo');

module.exports.create = async (req,res)=>{
    const post = await Todo.create(req.body);
    return res.redirect('/');
}

module.exports.delete = async (req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    return res.redirect('/');
}

module.exports.update = async(req,res)=>{
    if(req.body.content!== undefined){
        await Todo.findByIdAndUpdate(req.params.id,{title:req.body.content});
    }
    return res.redirect('/');
}