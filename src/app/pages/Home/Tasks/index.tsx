import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { actions } from './reducer';
import { RootState } from '../../../main/reducers';
import Card from './Card';

const Tasks: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  function handleAddTask(textTask: string) {
    dispatch(actions.addTask(textTask));
  }

  function handleToggleTask(id: string) {
    dispatch(actions.toggleTask(id));
  }

  function handleRemoveTask(id: string) {
    dispatch(actions.removeTask(id));
  }

  return (
    <Container>
      <ul>
        {tasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={handleToggleTask}
            onRemove={handleRemoveTask}
          />
        ))}
      </ul>
      <input onChange={(e) => setText(e.target.value)} />
      <button
        type="button"
        onClick={() => handleAddTask(text)}
      >
        add
      </button>
    </Container>
  );
};

export default Tasks;
