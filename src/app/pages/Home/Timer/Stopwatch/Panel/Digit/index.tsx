import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  value: string
}

// @TODO criar um arquivo com as animações

const Digit: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <motion.div
        key={value}
        initial={{ y: -16, rotateX: 90, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, opacity: 1 }}
        exit={{ y: 16, rotateX: 90, opacity: 0 }}
      >
        {value}
      </motion.div>
    </AnimatePresence>
  );
};

Digit.defaultProps = {
  value: '0',
};

export default Digit;
