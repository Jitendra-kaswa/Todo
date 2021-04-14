const Todo = require('../models/todo');

module.exports.show = async (req,res)=>{
    const posts =  await Todo.find({}).exec();
    console.log(posts);
    return res.render('home',{
        title:"Home Page",
        posts:posts
    });
}