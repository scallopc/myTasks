import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import Switch from "react-switch";
import { shade } from "polished";
import { BsMoonStars, BsSun } from "react-icons/bs";
import axios from "axios";

import Header from "./Header";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import TaskDetails from "./TaskDetails";

interface Props {
  toggleTheme(): void;
}

export interface ITask {
    id: string;
    title: string;
    completed: boolean;
}

const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 30px;
  border-radius: 10px;
  min-width: 250px;
`;

const HeaderContainer = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 3px;
`;

const Main: React.FC<Props> = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  const [tasks, setTasks] = useState([
    {
      id: "2",
      title: " Ler",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

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
            uncheckedHandleIcon={
              <BsSun
                style={{
                  height: "100%",
                  fontSize: 15,
                  marginLeft: 4,
                }}
              />
            }
            checkedHandleIcon={
              <BsMoonStars
                style={{
                  height: "100%",
                  fontSize: 15,
                  marginLeft: 4,
                }}
              />
            }
            height={10}
            width={40}
            handleDiameter={24}
            onHandleColor={colors.backgroundSecundary}
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

        <Route path="/:taskTitle" exact component={TaskDetails} />
      </Container>
    </Router>
  );
};

export default Main;
