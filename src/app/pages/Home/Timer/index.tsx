import React, { useState } from 'react';
import { Container } from './styles';
import useInterval from '../../../common/utils/hooks/use-interval';
import Stopwatch from './Stopwatch';
import Button from '../../../common/components/Button/index';

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useInterval(() => {
    setCount(count + 1);
  }, (run ? 1000 : null));

  return (
    <Container>

      <Stopwatch timer={count} />
      <Button
        type="button"
        variants="primary"
        onClick={() => setRun(!run)}
      >
        {run ? 'pause' : 'play'}
      </Button>
      <Button
        type="button"
        variants="secundary"
        onClick={() => {
          setCount(0);
          setRun(false);
        }}
      >
        reset
      </Button>
    </Container>
  );
};

export default Timer;
