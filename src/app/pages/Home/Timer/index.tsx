import React, { useState } from 'react';
import { Container, ButtonContainer } from './styles';
import Stopwatch from './Stopwatch';
import Button from '../../../common/components/Button';
import useInterval from '../../../common/utils/hooks/use-interval';

const limit = 1500; // @TODO remover aqui quando conectado ao redux

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useInterval(() => {
    setCount(count + 1);
  }, (run ? 1000 : null));

  function handleRunTimer(runValue: boolean) {
    setRun(!runValue);
  }

  function handleResetTimer() {
    setCount(0);
    setRun(false);
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
          onClick={() => handleRunTimer(run)}
        >
          {label}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;
