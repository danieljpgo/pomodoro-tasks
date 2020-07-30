import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../main/reducers';
import useInterval from '../../../common/utils/hooks/use-interval';
import Stopwatch from './Stopwatch';
import Button from '../../../common/components/Button';
import { Container, ButtonContainer } from './styles';
import { actions } from './reducer';

const Timer: React.FC = () => {
  const { limit, run, value } = useSelector((state: RootState) => state.timer);
  const [count, setCount] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(value);
  }, [value]);

  useInterval(() => {
    setCount(count + 1);
  }, (run ? 1000 : null));

  function handleRunTimer(countValue: number) {
    dispatch(run ? actions.pauseTimer(countValue) : actions.startTimer());
  }

  function handleResetTimer() {
    dispatch(actions.stopTimer());
    if (value === 0) setCount(value);
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
