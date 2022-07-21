import React from "react";
import Task from "../task/Task";

const Tasks = ({tasks}) => {
    return (
        <>
         {tasks.map((task) => <Task task={task} />)}
        </>
    )
}

export default Tasks