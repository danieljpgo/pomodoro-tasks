import React from 'react';
import { Task as TaskType } from '../types';
import { Container } from './styles';
import Task from './Task';

interface Props {
  tasks: TaskType[]
  onToggle: (id: string) => void,
  onRemove: (id: string) => void,
  onStarTimer: (id: string, value: number, limit: number) => void;
}

const List: React.FC<Props> = (props) => {
  const {
    tasks,
    onToggle,
    onRemove,
    onStarTimer,
  } = props;

  return (
    <Container>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          value={task.value}
          limit={task.limit}
          completed={task.completed}
          priority={task.priority}
          onToggle={onToggle}
          onRemove={onRemove}
          onStarTimer={onStarTimer}
        />
      ))}
    </Container>
  );
};

List.defaultProps = {
  tasks: [],
  onToggle: () => {},
  onRemove: () => {},
  onStarTimer: () => {},
};

export default List;
