import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import Switch from "react-switch";
import { shade } from "polished";
import Header from "./Header";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

interface Props {
  toggleTheme(): void;
}

export const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 30px;
  border-radius: 10px;
`;

export const HeaderContainer = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: center;
`;

const Main: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

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
    const newTask = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTask);
  };

  const handleTaskDelete = (taskId: any) => {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasks(newTask);
  };

  return (
    <Router>
      <Container>
        <HeaderContainer>
          <Header />
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.primary}
          />
        </HeaderContainer>
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
            </>
          )}
        />
      </Container>
    </Router>
  );
};

export default Main;
