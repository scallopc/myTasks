import React, { useState } from "react";
import './App.scss'
import Tasks from "./components/tasks/Tasks";

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

    return (
        <>
            <div className="container">
                <Tasks tasks={tasks} />
            </div>
        </>
    );
}

export default App;
