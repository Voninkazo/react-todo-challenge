import React from 'react';


function ToDoItem({todo}) {
    return(
        <div className="todo-items">
            <label>
                <input type="checkbox" name="checkbox"/>
                <span>{todo.title}</span>
            </label>
        </div>
    )
}

export default ToDoItem;