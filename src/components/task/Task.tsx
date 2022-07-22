import './Task.scss';
import { FaTrashAlt, FaInfoCircle, FaCheck } from "react-icons/fa";

export default function Task({ task, handleTaskClick, handleTaskDelete }: { task: any; handleTaskClick: any; handleTaskDelete: any }) {
    return (
        <div className="task-container" style={task.completed ? { borderLeft: '6px solid #FF8E00' } : {}} >

            {task.title}

            <div className="icons-container">
                <FaCheck className='icons' onClick={() => handleTaskClick(task.id)} />
                <FaInfoCircle className='icons' />
                <FaTrashAlt className='icons' onClick={() => handleTaskDelete(task.id)} />
            </div>

        </div>
    );

}
