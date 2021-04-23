const Todo = require('../models/todo');

module.exports.create = async (req,res)=>{
    try{
        let post = await Todo.create(req.body);
        if(req.xhr){
            return res.status(200).json({
                data:{
                    post:post
                },
                message:"Task Created!"
            });
        }
        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }
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

module.exports.toggle = async(req,res)=>{
    let task = await Todo.findById(req.params.id);
    let content = task.done == true ? 'false':'true';
    await Todo.findByIdAndUpdate(req.params.id,{done:content});
    return res.redirect('/');
}
