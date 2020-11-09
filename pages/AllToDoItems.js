import React from 'react';

function AllToDoItems({markAsCompleted,todoItems}) {
    return(
        <div>
            <div>
            {
                todoItems.map(todo => {
                    return (
                    <div className="todo-items"  key={todo.id}>
                        <label>
                            <input 
                            type="checkbox" 
                            name="checkbox" 
                            checked={`${todo.completed ? "checked" : "" }`}
                            onChange={() => markAsCompleted(todo.id)} 
                            />
                            <span className={`${todo.completed ? "item-completed" : "" }`}>{todo.title}</span>
                        </label>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AllToDoItems;