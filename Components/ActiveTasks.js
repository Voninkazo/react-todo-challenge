import React from 'react';
import useTodo from '../useTodo';

function ActiveTasks({activeTasks,handleChange}) {
    const [isOpen,toggle] = useTodo();
    return (
        <div>
            <button type="button" onClick={toggle}>Active tasks</button>
            {isOpen && 
                activeTasks.map(task => {
                    return(
                        <div className="todo-item"  key={task.id}>
                            <label>
                                <input 
                                type="checkbox" 
                                name="checkbox" 
                                onChange={handleChange}
                                />
                                <span>{task.title}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ActiveTasks;