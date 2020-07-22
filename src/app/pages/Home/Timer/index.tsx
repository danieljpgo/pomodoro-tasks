import React, { useState } from 'react';
import { Container } from './styles';
import useInterval from '../../../common/utils/hooks/use-interval';

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useInterval(() => {
    setCount(count + 1);
  }, (run ? 1000 : null));

  return (
    <Container>
      <button
        type="button"
        onClick={() => setRun(!run)}
      >
        {run ? 'pause' : 'play'}
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(0);
          setRun(false);
        }}
      >
        reset
      </button>
      <h1>{count}</h1>
    </Container>
  );
};

export default Timer;
