import { FaTrashAlt, FaInfoCircle, FaCheck } from "react-icons/fa";
import styled from 'styled-components';

const TaskContainer = styled.div`
background-color:${props => props.theme.colors.backgroundSecundary};
margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`

const IconsContainer = styled.div`
display: flex;
gap: 5px;
align-items: center;
`


export default function Task({ task, handleTaskClick, handleTaskDelete }: { task: any; handleTaskClick: any; handleTaskDelete: any }) {
    return (
        <TaskContainer style={task.completed ? { borderLeft: '6px solid #FF8E00' } : {}} >

            {task.title}

            <IconsContainer>
                <FaCheck className='icons' onClick={() => handleTaskClick(task.id)} />
                <FaInfoCircle/>
                <FaTrashAlt className='icons' onClick={() => handleTaskDelete(task.id)} />
            </IconsContainer>

        </TaskContainer>
    );

}
