import React from 'react';
import {
  Container, Priority, Text, Info,
} from './styles';

interface Props {
  id: string,
  text: string,
  completed: boolean,
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const Task: React.FC<Props> = (props) => {
  const {
    id,
    text,
    completed,
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
      <Priority />
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
