import React from 'react';
import { Container } from './styles';

interface Props {
  id: string,
  text: string,
  completed: boolean,
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const Card: React.FC<Props> = (props) => {
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
      <div>
        {text}
      </div>
      {completed ? 'true' : 'false'}
    </Container>
  );
};

export default Card;
