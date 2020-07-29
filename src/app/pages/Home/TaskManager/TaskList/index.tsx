import React from 'react';
import { Container, List } from './styles';
import { Task } from '../types';
import TaskContainer from './Task';

interface Props {
  tasks: Task[]
  onToggle: (id: string) => void,
  onRemove: (id: string) => void,
}

const TaskList: React.FC<Props> = (props) => {
  const {
    tasks,
    onToggle,
    onRemove,
  } = props;

  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <TaskContainer
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            priority={task.priority}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
