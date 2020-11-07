import React, { useState } from 'react';
import ToDoItem from './Components/ToDoItem';

const initializeItems = [
    {
        title: "Do coding challenges",
        id: 3248936666666666666666,
        completed: false,
    },
    {
        title: "Do washing",
        id: 239479386666667,
        completed: false,
    }
]

function App() {

    const [todoItems, setTodoItem] = useState(initializeItems);
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
        setTodoItem(prevState => {
            return [
                ...prevState,
                lists,
            ]
        })
        e.target.reset();
    }

    return (
        <div>
            <h2>To do challenge</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {
                todoItems.map(todo => {
                        return(
                <ToDoItem todo={todo} handleSubmit={handleSubmit} key={todo.id}  />
                )
                })
            }
            </div>
        </div>
    )
}

export default App;