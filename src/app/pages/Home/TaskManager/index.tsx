import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimateSharedLayout } from 'framer-motion';
import { actions } from './reducer';
import { RootState } from '../../../main/reducers';
import TaskList from './TaskList';
import Button from '../../../common/components/Button';
import {
  Container,
  ListContainer,
  TitleContainer,
  Title,
  Underline,
} from './styles';

interface Types{
  id: List,
  title: string,
}

const types: Types[] = [
  { id: 'all', title: 'All Tasks' },
  { id: 'completed', title: 'Completed' },
];

type List = 'all' | 'completed';

const Tasks: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state);
  const [listSelected, setListSelected] = useState<List>('all');

  const dispatch = useDispatch();

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
      <ListContainer>
        {listSelected === 'all'
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
          )}
      </ListContainer>
      <Button
        styleVariants="primary"
        onClick={() => handleAddTask()}
      >
        + Add
      </Button>
    </Container>
  );
};

export default Tasks;
