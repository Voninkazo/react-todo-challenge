import React from 'react';


function ActiveTasks({activeTasks,markAsCompleted}) {
    return (
        <div>
            { 
                activeTasks.map(task => {
                    return(
                        <div className="todo-item"  key={task.id}>
                            <label>
                                <input 
                                type="checkbox" 
                                name="checkbox" 
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