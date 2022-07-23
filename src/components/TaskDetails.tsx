import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const TaskDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  margin: 15px 0;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 5px;

  p {
    font-size: 13px;
  }
`;

const ButtonContainer = styled.div`
  width: 30%;
`;

export default function TaskDetails() {
  const params: any = useParams();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleBack}>Voltar</Button>
      </ButtonContainer>

      <TaskDetailsContainer>
        <h3>{params.taskTitle}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quibusdam autem culpa temporibus libero harum?
        </p>
      </TaskDetailsContainer>
    </>
  );
}
