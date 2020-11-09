import React from 'react';
import useTodo from '../useTodo';

function ActiveTasks({activeTasks,handleChange,markAsCompleted}) {
    const [isOpen,toggle] = useTodo();
    return (
        <div>
            <button type="button" className="btn" onClick={toggle}>Active tasks</button>
            {isOpen && 
                activeTasks.map(task => {
                    return(
                        <div className="todo-item"  key={task.id}>
                            <label>
                                <input 
                                type="checkbox" 
                                name="checkbox" 
                                // onChange={handleChange}
                                checked={`${task.completed ? "checked" : "" }`}
                                onChange={() => markAsCompleted(task.id)} 
                                />
                                <span className={`${task.completed ? "item-completed" : "" }`}>{task.title}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ActiveTasks;