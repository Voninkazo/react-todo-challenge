import React from 'react';
import useTodo from '../useTodo';

function CompletedItems({completedTasks,handleChange,removeItem}) {
    const [isToggle, toggle] = useTodo();
    return(
        <div>
            <button type="button" className="btn" onClick={toggle}>Completed tasks</button>
            <div>
                { isToggle &&
                    completedTasks.map(task =>{
                        return (
                        <div className="todo-item"  key={task.id}>
                            <label>
                                <input 
                                type="checkbox" 
                                name="checkbox" 
                                checked={`${task.completed ? "checked" : "" }`}
                                onChange={handleChange}
                                />
                                <span className={`${task.completed ? "item-completed" : "" }`}>{task.title}</span>
                                <button type="button" onClick={() => removeItem(task.id)}>X</button>
                            </label>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompletedItems;