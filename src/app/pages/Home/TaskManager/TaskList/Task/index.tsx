import React from 'react';
import {
  Container, Priority, Text, Info,
} from './styles';
import { Task as TaskProps } from '../../types';

interface Props extends TaskProps {
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const Task: React.FC<Props> = (props) => {
  const {
    id,
    text,
    completed,
    priority,
    onToggle,
    onRemove,
  } = props;

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
      />
      <Text>
        <div>{text}</div>
        <div>0 minutes</div>
      </Text>
      <Info>
        <div>1/4</div>
        <div>25 min</div>
      </Info>
      {/* <div>
        <button
          type="button"
          onClick={() => handleToggle(id)}
        >
          toggle
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => handleRemove(id)}
        >
          remove
        </button>
      </div> */}
      {/* {completed ? 'true' : 'false'} */}
    </Container>
  );
};

export default Task;
