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
  onStarTimer: (id: string) => void;
}

const Task: React.FC<Props> = (props) => {
  const {
    id,
    text,
    timer,
    completed,
    priority,
    onToggle,
    onRemove,
    onStarTimer,
  } = props;

  function handleStarTimer(idTask: string) {
    onStarTimer(idTask);
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
        <div>{timer}</div>
      </Info>
      <div>
        <button
          type="button"
          onClick={() => handleStarTimer(id)}
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
