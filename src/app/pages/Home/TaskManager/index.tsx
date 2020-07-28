import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Container, ListContainer, TitleContainer } from './styles';
import { actions } from './reducer';
import { RootState } from '../../../main/reducers';
import TaskList from './TaskList';
import Button from '../../../common/components/Button';

type List = 'all' | 'completed';

const Tasks: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state);
  const [text, setText] = useState('');
  const [listSelected, setListSelected] = useState<List>('all');

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

  function handleListType(type: List) {
    setListSelected(type);
  }

  const tasksTodo = tasks.filter((task) => !task.completed);
  const tasksCompleted = tasks.filter((task) => task.completed);

  return (
    <Container>
      <TitleContainer>
        <motion.h2
          onClick={() => handleListType('all')}
        >
          All Tasks
        </motion.h2>
        <motion.h2
          onClick={() => handleListType('completed')}
        >
          Completed
        </motion.h2>
      </TitleContainer>
      <ListContainer>
        {
          listSelected === 'all'
            ? (
              <TaskList
                key="all"
                tasks={tasksTodo}
                onToggle={handleToggleTask}
                onRemove={handleRemoveTask}
              />
            )
            : (
              <TaskList
                key="completed"
                tasks={tasksCompleted}
                onToggle={handleToggleTask}
                onRemove={handleRemoveTask}
              />
            )
        }
      </ListContainer>
      <div>
        <input onChange={(e) => setText(e.target.value)} />
        <Button
          styleVariants="primary"
          onClick={() => handleAddTask(text)}
        >
          + Add new task
        </Button>
      </div>
    </Container>
  );
};

export default Tasks;
