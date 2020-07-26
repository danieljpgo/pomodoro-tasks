import React, { useState } from 'react';
import { Container, ButtonContainer } from './styles';
import Stopwatch from './Stopwatch';
import Button from '../../../styles/components/Button/index';
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

  return (
    <Container>
      <Stopwatch
        timer={count}
        limit={limit}
      />
      <ButtonContainer>
        <Button
          type="button"
          styleVariants="secundary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleResetTimer()}
        >
          Reset
        </Button>
        <Button
          type="button"
          styleVariants="primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRunTimer(run)}
        >
          {run ? 'Pause' : 'Play'}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;
