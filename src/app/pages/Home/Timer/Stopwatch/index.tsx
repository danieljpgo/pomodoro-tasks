import React from 'react';
import { Container, Content } from './styles';
import ProgressBar from './ProgressBar';

interface Props {
  timer: number,
}

const Stopwatch: React.FC<Props> = (props) => {
  const { timer } = props;

  return (
    <Container>
      <ProgressBar timer={timer} />
      <Content>
        <h1>{timer}</h1>
      </Content>
    </Container>
  );
};

export default Stopwatch;
