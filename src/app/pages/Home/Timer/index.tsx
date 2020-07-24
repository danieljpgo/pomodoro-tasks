import React, { useState } from 'react';
import { Container, ButtonContainer } from './styles';
import useInterval from '../../../common/utils/hooks/use-interval';
import Stopwatch from './Stopwatch';
import Button from '../../../styles/components/Button/index';

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useInterval(() => {
    setCount(count + 1);
  }, (run ? 1000 : null));

  return (
    <Container>
      <Stopwatch timer={count} />

      <ButtonContainer>
        <Button
          type="button"
          styleVariants="secundary"
          whileHover={{ x: 10 }}
          whileTap={{ x: 0 }}
          onClick={() => {
            setCount(0);
            setRun(false);
          }}
        >
          Reset
        </Button>
        <Button
          type="button"
          styleVariants="primary"
          whileHover={{ x: 10 }}
          whileTap={{ x: 0 }}
          onClick={() => setRun(!run)}
        >
          {run ? 'Pause' : 'Play'}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;
