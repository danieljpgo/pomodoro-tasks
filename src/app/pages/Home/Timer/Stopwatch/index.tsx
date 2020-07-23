import React from 'react';
import { Container } from './styles';

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
    </Container>
  );
};

export default Stopwatch;
