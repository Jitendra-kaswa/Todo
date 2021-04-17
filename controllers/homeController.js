const Todo = require('../models/todo');

module.exports.show = async (req,res)=>{
    const notCompletedTasks =  await Todo.find({done:false}).exec();
    const compeltedTasks = await Todo.find({done:true}).exec();
    return res.render('home',{
        title:"Home Page",
        notCompletedTasks:notCompletedTasks,
        completedTasks:compeltedTasks
    });
}