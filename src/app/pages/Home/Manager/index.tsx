import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimateSharedLayout } from 'framer-motion';
import { actions } from './reducer';
import { actions as timerActions } from '../Timer/reducer';
import { RootState } from '../../../main/reducers';
import Button from '../../../common/components/Button';
import { List, Types } from './types';
import TaskList from './List';
import {
  Container,
  TitleContainer,
  Title,
  Underline,
} from './styles';

const types: Types[] = [
  { id: 'all', title: 'All Tasks' },
  { id: 'completed', title: 'Completed' },
];

const Tasks: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const [listSelected, setListSelected] = useState<List>('all');

  const dispatch = useDispatch();

  function handleStarTimer(taskId: string, taskValue: number, taskLimit: number) {
    dispatch(timerActions.startTimer(taskId, taskValue, taskLimit));
  }

  function handleAddTask() {
    dispatch(actions.addTask());
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
      <div>
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
              onStarTimer={handleStarTimer} // @TODO remover função não necessaria
            />
          )}
      </div>
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
