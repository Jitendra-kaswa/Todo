{   
    function createTask(){
    let newTaskForm = $('#new-task-form');

    newTask.submit((e)=>{
        $.ajax({
            type:"POST",
            url:'/todo/create',
            data:newTaskForm.serialize(),
            success:(data)=>{
                let newTask = newTaskDom(data.data.post)
                $('#yet-to-complete-tasks').prepand(newTask);
                // deletePost($(' .delete-post', newTask));
            },
            error:(error)=>{
                console.log(error.responseText);
            }
        });
        let newTaskDom = (post)=>{
            return $(`<li id="${post._id}">
            <input type="checkbox" class="unchecked-box" onclick="toggletasks(this)">
            <p>${post.title}</p>
            <button type="submit" class="delete-task" onclick="deletefunction(this)">Delete </button>
            <button type="submit" class="update-task" onclick="updatefunction(this)">Update</button>
        </li>`)
        }
        return false;
    });}


    function deletefunction(e){
        // alert(e.parentNode.id);
        let parent_id = e.parentNode.id;
        $.ajax({
            type:"GET",
            url:'/todo/delete/'+parent_id,
            success:()=>{
                $.ajax({
                    type:"GET",
                    url:'/',
                    success:()=>{console.log("Successfully deleted")},
                    error: (err)=>{console.log("Error in Deleting the Data")}
                })
            },
            error:(error)=>{
                console.log(error.responseText);
            }
        });
        return false;
    }
    
    function toggletasks(e){
        let parent_id = e.parentNode.id;
        $.ajax({
            type:"GET",
            url:'/todo/toggle/'+parent_id,
            success:()=>{console.log("This is a success message")},
            error:(error)=>{
                console.log(error.responseText);
            }
        });
        return false;
    }

    function updatefunction(e){
        alert(e);
    }




    
    function convertTasksToAjax(){
        $('#yet-to-complete-tasks>li').each(()=>{
            let self = $(this);
            let deleteButton = $(' .delete-task', self);
            deletePost(deleteButton);
        });

        $('#completed-tasks>li').each(()=>{
            let self = $(this);
            let deleteButton = $(' .delete-task', self);
            deletePost(deleteButton);
        });
    }
    
    // $(".delete-task").submit((e)=>{
    //     var parent_id = $(this).parentElement.attributes['id'];//.parent().attr("id");
    //     console.log(parent_id);
    // });

    // $(".unchecked-box").click(()=>{
    //     console.log('clicked');
    // });

    // // $(".update-task").submit(()=>{
    // //     console.log("Update button pressed")
    // // })

    // var closeIcon = document.getElementsByClassName('update-task'); 
    // function closeBigImgAndContainer(e){
    //    console.log("update button is pressed !!!")
    // };

    // for (var i = 0; i < closeIcon.length; i++) {
    //     console.log("IN");
    // closeIcon[i].addEventListener('submit', closeBigImgAndContainer); 
    // }
    // createTask();
}