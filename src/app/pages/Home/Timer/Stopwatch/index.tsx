import React from 'react';
import { Container } from './styles';
import ProgressBar from './ProgressBar';

interface Props {
  timer: number,
}

const Stopwatch: React.FC<Props> = (props) => {
  const { timer } = props;

  return (
    <Container>
      <h1>
        {timer}
      </h1>
      <ProgressBar timer={timer} />
    </Container>
  );
};

export default Stopwatch;
