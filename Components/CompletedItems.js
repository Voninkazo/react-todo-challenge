import React from 'react';
import useTodo from '../useTodo';

function CompletedItems({completedTaks,handleChange}) {
    const [isToggle, toggle] = useTodo();
    return(
        <div>
            <button type="button" onClick={toggle}>Completed tasks</button>
            <div>
                { isToggle &&
                    completedTaks.map(task =>{
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