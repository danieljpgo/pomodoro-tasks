import React from 'react';
import { Container, List } from './styles';
import { Task } from '../types';
import TaskContainer from './Task';

interface Props {
  title: string,
  tasks: Task[]
  onToggle: (id: string) => void,
  onRemove: (id: string) => void,
}

const TaskList: React.FC<Props> = (props) => {
  const {
    title,
    tasks,
    onToggle,
    onRemove,
  } = props;

  return (
    <Container>
      <h2>{title}</h2>
      <List>
        {tasks.map((task) => (
          <TaskContainer
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
