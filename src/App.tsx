import { useState } from "react";
import AddTask from "./components/addTask/AddTask";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Header from "./components/Header";
import Tasks from "./components/tasks/Tasks";

export default function App() {

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

    const handleTaskAddition = (taskTitle: any) => {
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

    const handleTaskClick = (taskId: any) => {
        const newTask = tasks.map(task => {
            if (task.id == taskId) return { ...task, completed: !task.completed }
            return task;
        });
        setTasks(newTask);

    };

    const handleTaskDelete = (taskId: any) => {
        const newTask = tasks.filter(task => task.id !== taskId);

        setTasks(newTask);
    };

    return (
        <Router>
            <div className="container">
                <Header />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            <AddTask handleTaskAddition={handleTaskAddition} />
                            <Tasks
                                tasks={tasks}
                                handleTaskClick={handleTaskClick}
                                handleTaskDelete={handleTaskDelete}
                            />
                            <button>Teste</button>
                        </>
                    )}
                />
            </div>
        </Router>
    );
}


