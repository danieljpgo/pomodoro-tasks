import React from 'react';
import { Container, Content } from './styles';
import ProgressBar from './ProgressBar';
import Panel from './Panel';

interface Props {
  timer: number,
}

const Stopwatch: React.FC<Props> = (props) => {
  const { timer } = props;
  const limit = 1500;

  return (
    <Container>
      <ProgressBar
        timer={timer}
        limit={limit}
      />
      <Content>
        <Panel timer={timer} />
      </Content>
    </Container>
  );
};

Stopwatch.defaultProps = {
  timer: 0,
};

export default Stopwatch;
