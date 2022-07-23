import { useState } from "react";
import Button from "./Button";
import styled from "styled-components";

const TaskContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  color: ${(props) => props.theme.colors.text};
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  flex: 2;
`;
const ButtonContainer = styled.div`
  flex: 1;
`;

export default function AddTask({
  handleTaskAddition,
}: {
  handleTaskAddition: any;
}) {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: any) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
  handleTaskAddition(inputData)
  setInputData("");
  };

  return (
    <TaskContainer>
      <Input onChange={handleInputChange} value={inputData} type="text" placeholder="Digite aqui sua tarefa"/>
      <ButtonContainer>
        <Button onClick={handleAddTaskClick}> Adicionar </Button>
      </ButtonContainer>
    </TaskContainer>
  );
}
