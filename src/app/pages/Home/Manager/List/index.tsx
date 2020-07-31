import React from 'react';
import { Task as TaskType } from '../types';
import { Container } from './styles';
import Task from './Task';
import { usePositionReorder } from '../../../../common/utils/hooks/use-position-reorder';

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

  const modTasks = tasks.map((x) => ({
    ...x,
    height: 102,
  }));

  console.log(modTasks);
  const [order, updatePosition, updateOrder] = usePositionReorder(modTasks);

  return (
    <Container>
      {order.map((task: any, index: number) => (
        <Task
          key={task.id}
          id={task.id}
          index={index}
          height={task.height}
          text={task.text}
          value={task.value}
          limit={task.limit}
          completed={task.completed}
          priority={task.priority}
          onToggle={onToggle}
          onRemove={onRemove}
          onStarTimer={onStarTimer}
          updateOrder={updateOrder}
          updatePosition={updatePosition}
        />
      ))}
    </Container>
  );
};

export default List;
