import React from 'react';
import { motion } from 'framer-motion';
import { Container, SvgTrack, SvgBar } from './styles';

interface Props {
  timer: number,
}

const ProgressBar: React.FC<Props> = (props) => {
  const { timer } = props;

  console.log(timer);

  const circumference = Math.ceil(2 * Math.PI * 45);

  const fillPercents = Math.abs(
    Math.ceil((circumference / 10) * (5 - 10)),
  );

  const transition = {
    // duration: 3,
    // delay: 0.5,
    // ease: 'easeIn',
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <Container>
      <SvgTrack viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={45}
        />
      </SvgTrack>
      <SvgBar viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r={45}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          animate="show"
        />
      </SvgBar>

    </Container>
  );
};
export default ProgressBar;
