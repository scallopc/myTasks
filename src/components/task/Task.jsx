import React from 'react';
import './Task.scss';

const Task = ({ task }) => {
    return (
        <div className="task-container">{task.title}</div>
    );
}

export default Task;