import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';

interface Props{
  timer: number,
}

const Panel: React.FC<Props> = (props) => {
  const { timer } = props;

  const minute = String(Math.trunc(timer / 60)).padStart(2, '0');
  const second = String(timer % 60).padStart(2, '0');

  return (
    <Container>
      <motion.span>
        {minute}
      </motion.span>
      <span>:</span>
      <motion.span>
        {second}
      </motion.span>
    </Container>
  );
};

Panel.defaultProps = {
  timer: 0,
};

export default Panel;

// const controls = useAnimation();

// useEffect(() => {
//   console.log('ai papai');
//   controls.set({
//     y: 20,
//   });
// }, [timer]);
