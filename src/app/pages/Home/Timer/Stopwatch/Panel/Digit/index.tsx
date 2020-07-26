import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  value: string
}

const Digit: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <motion.div
        key={value}
        initial={{ y: -14, rotateX: 90, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, opacity: 1 }}
        exit={{ y: 14, rotateX: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
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
