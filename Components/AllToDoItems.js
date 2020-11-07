import React from 'react';
import useTodo from '../useTodo';


function AllToDoItems({markAsCompleted,todoItems}) {
    const [isOpen,toggle] = useTodo(true);
    return(
        <div>
            <button type="button" className="btn" onClick={toggle}>All</button>
            <div>
            {
                isOpen && 
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