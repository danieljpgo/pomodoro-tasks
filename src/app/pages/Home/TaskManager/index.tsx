import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { actions } from './reducer';
import { RootState } from '../../../main/reducers';
import TaskList from './TaskList';

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

  const tasksTodo = tasks.filter((task) => !task.completed);
  const tasksCompleted = tasks.filter((task) => task.completed);

  return (
    <Container>
      <TaskList
        title="To Do"
        tasks={tasksTodo}
        onToggle={handleToggleTask}
        onRemove={handleRemoveTask}
      />

      <TaskList
        title="Completed"
        tasks={tasksCompleted}
        onToggle={handleToggleTask}
        onRemove={handleRemoveTask}
      />
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
