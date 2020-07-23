import { useEffect, useRef } from 'react';

const noop = () => {};

const useInterval = (
  callback: () => void,
  delay: number | null,
) => {
  const savedCallback = useRef(noop);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined; // @TODO verificar aqui
  }, [delay]);
};

export default useInterval;
