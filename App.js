import React, { useState } from 'react';
import AllToDoItems from './Components/AllToDoItems';
import FormSubmit from './Components/FormSubmit';
import CompletedItems from './Components/CompletedItems';
import ActiveTasks from './Components/ActiveTasks';

const initializeItems = [
    {
        title: "Do coding challenges",
        id: 3248936666666666666666,
        completed: true,
    },
    {
        title: "Do washing",
        id: 239479386666667,
        completed: true,
    }
]

function App() {

    const [todoItems, setTodoItems] = useState(initializeItems);
    const [value,setValue] = useState("");

    function handleChange(e) {
        const {value} = e.target;
        setValue(value);
        console.log(value)
    }

        function handleSubmit(e) {
        e.preventDefault();
        const lists = {
            title: value,
            id: Date.now(),
            completed: false,
        }
        setTodoItems(prevState => {
            return [
                ...prevState,
                lists,
            ]
        })
        e.target.reset();
    }

    function markAsCompleted(id) {
        console.log(id);
        const updatedItems = todoItems.map(item => 
         (item.id === id ? { ...item, completed: true} : item)); 
         setTodoItems(updatedItems)
    }

    const completedTaks = todoItems.filter(task => task.completed === true);
    console.log(completedTaks);
    const activeTasks = todoItems.filter(task => task.completed === false);
    console.log(activeTasks);

    return (
        <div>
            <h2>To do challenge</h2>
            <FormSubmit  handleChange={handleChange} handleSubmit={handleSubmit}/>
            <AllToDoItems todoItems={todoItems} markAsCompleted={markAsCompleted}  />
            <CompletedItems completedTaks={completedTaks} handleChange={handleChange} />
            <ActiveTasks activeTasks={activeTasks} handleChange={handleChange} />
        </div>
    )
}

export default App;