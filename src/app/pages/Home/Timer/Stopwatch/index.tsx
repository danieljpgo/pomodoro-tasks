import React from 'react';
import { Container } from './styles';
import ProgressBar from './ProgressBar';
import Panel from './Panel';

interface Props {
  timer: number,
  limit: number,
}

const Stopwatch: React.FC<Props> = (props) => {
  const { timer, limit } = props;

  return (
    <Container>
      <ProgressBar
        timer={timer}
        limit={limit}
      />
      <Panel timer={timer} />
    </Container>
  );
};

Stopwatch.defaultProps = {
  timer: 0,
  limit: 0,
};

export default Stopwatch;
