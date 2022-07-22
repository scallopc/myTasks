import Task from "../task/Task";

export default function Tasks({ tasks, handleTaskClick, handleTaskDelete }: { tasks: any; handleTaskClick: any; handleTaskDelete: any }) {
    return (
        <>
            {tasks.map((task: any) => <Task
                task={task}
                handleTaskClick={handleTaskClick}
                handleTaskDelete={handleTaskDelete}
            />)}
        </>
    )
}

