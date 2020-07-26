


function addTodo(){
    var todo_item = document.getElementById("todo-item")


    //create li tag with text node
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    // create delete button
   var delBtn = document.createElement("button")
   var delText = document.createTextNode("DELETE")
   delBtn.setAttribute("class","btn")
   delBtn.setAttribute("onclick","deleteItem('this')")
   delBtn.appendChild(delText)
   
   li.appendChild(delBtn)

    list.appendChild(li)

    todo_item.value = ""
    console.log(li)
}

function deleteItem(e){
    e.parentNode.remove()
}
