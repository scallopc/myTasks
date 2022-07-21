import React, { useState } from "react";
import './App.scss'
import AddTask from "./components/addTask/AddTask";
import Tasks from "./components/tasks/Tasks";
import { v4 as uuidv4 } from 'uuid';


const App = () => {

    const [tasks, setTasks] = useState([
        {
            id: "1",
            title: " Estudar",
            completed: false,
        },
        {
            id: "2",
            title: " Ler",
            completed: true,
        },
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTask = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];

        setTasks(newTask);
    };

    return (
        <>
            <div className="container">
                <AddTask handleTaskAddition={handleTaskAddition}/>
                <Tasks tasks={tasks} />
            </div>
        </>
    );
}

export default App;
