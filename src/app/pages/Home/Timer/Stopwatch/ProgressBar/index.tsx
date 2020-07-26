import React from 'react';
import { motion } from 'framer-motion';
import { Container, SvgTrack, SvgBar } from './styles';

interface Props {
  timer: number,
  limit: number,
}

const ProgressBar: React.FC<Props> = (props) => {
  const { timer, limit } = props;
  const radius = 45;

  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(Math.ceil((circumference / limit) * (timer - limit)));

  return (
    <Container>
      <SvgTrack viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
        />
      </SvgTrack>
      <SvgBar viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: fillPercents }}
          transition={{ duration: 1 }}
        />
      </SvgBar>
    </Container>
  );
};

// @TODO Corrigir default props ao trocar os valores do conometro

ProgressBar.defaultProps = {
  timer: 0,
  limit: 1500,
};

export default ProgressBar;
