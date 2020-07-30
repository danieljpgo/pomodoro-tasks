import React from 'react';
import { Task as TaskProps } from '../../types';
import {
  Container,
  Priority,
  Text,
  Info,
} from './styles';

interface Props extends TaskProps {
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onStarTimer: (id: string, value: number, limit: number) => void;
}

const Task: React.FC<Props> = (props) => {
  const {
    id,
    text,
    limit,
    value,
    completed,
    priority,
    onToggle,
    onRemove,
    onStarTimer,
  } = props;

  // @TODO melhorar aqui
  function handleStarTimer(idTask: string, valueTask: number, limitTask: number) {
    onStarTimer(idTask, valueTask, limitTask);
  }

  function handleToggle(idTask: string) {
    onToggle(idTask);
  }

  function handleRemove(idTask: string) {
    onRemove(idTask);
  }

  return (
    <Container>
      <Priority
        type={priority}
        completed={completed}
      />
      <Text>
        <div>{text}</div>
        <div>0 minutes</div>
      </Text>
      <Info>
        <div>1/4</div>
        <div>{value}</div>
      </Info>
      <div>
        <button
          type="button"
          onClick={() => handleStarTimer(id, value, limit)}
        >
          play
        </button>
        <button
          type="button"
          onClick={() => handleToggle(id)}
        >
          toggle
        </button>
        <button
          type="button"
          onClick={() => handleRemove(id)}
        >
          remove
        </button>
      </div>
    </Container>
  );
};

Task.defaultProps = {
  id: '',
  text: '',
  completed: false,
  priority: 'medium',
  onToggle: () => {},
  onRemove: () => {},
  onStarTimer: () => {},
};

export default Task;
