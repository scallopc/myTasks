import { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';


const TaskContainer = styled.div`
margin: 15px 0;
width: 100%;
display: flex;
`

const Input = styled.input`
background-color:${props => props.theme.colors.backgroundSecundary};
height: 40px;
padding: 0 10px;
border: none;
border-radius: 5px;
flex: 2;
color:${props => props.theme.colors.text};
`
const ButtonContainer = styled.div`
margin-left: 10px;
flex: 1;
`


export default function AddTask({ handleTaskAddition }: { handleTaskAddition: any }) {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e: any) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };

    return (
        <TaskContainer>
            <Input
                onChange={handleInputChange}
                value={inputData}
                type="text"
            />
            <ButtonContainer>
                <Button onClick={handleAddTaskClick}> Adicionar </ Button>
            </ButtonContainer>
        </TaskContainer>
    );
};

