import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimateSharedLayout } from 'framer-motion';
import { tasksActions } from './reducer';
import { timerActions } from '../Timer/reducer';
import { RootState } from '../../../main/reducers';
import { List, Types } from './types';
import Button from '../../../common/components/Button';
import TaskList from './List';
import {
  Container,
  TitleContainer,
  Title,
  Underline,
  ListContainer,
} from './styles';

const types: Types[] = [
  { id: 'all', title: 'All Tasks' },
  { id: 'completed', title: 'Completed' },
];

const Tasks: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [listSelected, setListSelected] = useState<List>('all');

  function handleStarTimer(taskId: string, taskValue: number, taskLimit: number) {
    // if (timer.run) dispatch(timerActions.pauseTimer(timer.taskId, 0)); @TODO Olhar aqui
    dispatch(timerActions.startTimer(taskId, taskValue, taskLimit));
  }

  function handleAddTask() {
    dispatch(tasksActions.addTask());
  }

  function handleToggleTask(id: string) {
    dispatch(tasksActions.toggleTask(id));
  }

  function handleRemoveTask(id: string) {
    dispatch(tasksActions.removeTask(id));
  }

  function handleListType(type: List) {
    setListSelected(type);
  }

  const tasksTodo = tasks.filter((task) => !task.completed);
  const tasksCompleted = tasks.filter((task) => task.completed);

  return (
    <Container>
      <AnimateSharedLayout>
        <TitleContainer>
          {types.map((type) => (
            <Title
              key={type.id}
              selected={type.id === listSelected}
              onClick={() => handleListType(type.id)}
            >
              {type.title}
              {type.id === listSelected && (
                <Underline layoutId="underline" />
              )}
            </Title>
          ))}
        </TitleContainer>
      </AnimateSharedLayout>
      <ListContainer>
        {listSelected === 'all'
          ? (
            <TaskList
              key="all"
              tasks={tasksTodo}
              onToggle={handleToggleTask}
              onRemove={handleRemoveTask}
              onStarTimer={handleStarTimer}
            />
          )
          : (
            <TaskList
              key="completed"
              tasks={tasksCompleted}
              onToggle={handleToggleTask}
              onRemove={handleRemoveTask}
              onStarTimer={handleStarTimer}
            />
          )}
      </ListContainer>
      <Button
        styleVariants="primary"
        onClick={() => handleAddTask()}
      >
        Add
      </Button>
    </Container>
  );
};

export default Tasks;
