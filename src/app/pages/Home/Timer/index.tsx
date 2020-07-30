import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../main/reducers';
import useInterval from '../../../common/utils/hooks/use-interval';
import Stopwatch from './Stopwatch';
import Button from '../../../common/components/Button';
import { Container, ButtonContainer } from './styles';
import { timerActions } from './reducer';
import { tasksActions } from '../Manager/reducer';

const ticker = 1000;
const defaultCount = 0;

const Timer: React.FC = () => {
  const {
    run,
    value,
    limit,
    taskId,
  } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  useInterval(() => {
    setCount(count + 1);
  }, (run ? ticker : null));

  function handleRunTimer(countValue: number) {
    if (run) {
      dispatch(timerActions.pauseTimer(taskId, countValue));
      dispatch(tasksActions.timerTask(taskId, countValue));
    } else {
      dispatch(timerActions.startTimer(taskId, value, limit));
    }
  }

  function handleResetTimer() {
    dispatch(timerActions.stopTimer(taskId));
    dispatch(tasksActions.timerTask(taskId, defaultCount));
    if (value === defaultCount) setCount(value);
  }

  const label = run ? 'Pause' : 'Play';

  return (
    <Container>
      <Stopwatch
        timer={count}
        limit={limit}
      />
      <ButtonContainer>
        <Button
          styleVariants="secundary"
          onClick={() => handleResetTimer()}
        >
          Reset
        </Button>
        <Button
          styleVariants="primary"
          onClick={() => handleRunTimer(count)}
        >
          {label}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;
