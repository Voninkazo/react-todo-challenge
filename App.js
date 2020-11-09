import React, { useEffect, useState } from 'react';
import AllToDoItems from './pages/AllToDoItems';
import FormSubmit from './Components/FormSubmit';
import CompletedItems from './pages/CompletedItems';
import ActiveTasks from './pages/ActiveTasks';
import Header from './Components/Header';
import { Switch, Route, Link } from 'react-router-dom';

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

    const [todoItems, setTodoItems] = useState(initializeItems)
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

    useEffect(() => {
        localStorage.setItem('todolists', JSON.stringify(todoItems));
      }, [todoItems]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todolists'));
        if (items) {
          setTodoItems(todoItems);
        }
      }, []);


    function markAsCompleted(id) {
        console.log(id);
        const updatedItems = todoItems.map(item => 
         (item.id === id ? { ...item, completed: true} : item)); 
         setTodoItems(updatedItems)
    }

    const completedTasks = todoItems.filter(task => task.completed === true);
    console.log(completedTasks);
    const activeTasks = todoItems.filter(task => task.completed === false);
    console.log(activeTasks);

    function removeItem(id) {
       setTodoItems(todoItems.filter(task => task.id !== id));
        console.log(id);
    }

    return (
        <div>
            <Header />
            <FormSubmit  handleChange={handleChange} handleSubmit={handleSubmit}/>
            <div className="pages">
                <Link to="/">All</Link>
                <Link to="/active">Active</Link>
                <Link to="completed">Completed</Link>
            </div>
            <main>
                <Switch>
                    <Route exact path="/">
                        <AllToDoItems todoItems={todoItems} markAsCompleted={markAsCompleted}  />
                    </Route>
                    <Route path="/completed">
                        <CompletedItems completedTasks={completedTasks} handleChange={handleChange} removeItem={removeItem} />
                    </Route>
                    <Route  path="/active">
                        <ActiveTasks activeTasks={activeTasks} markAsCompleted={markAsCompleted} />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App;