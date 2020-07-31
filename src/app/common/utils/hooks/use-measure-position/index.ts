// Thanks Matt Perry.
// https://codesandbox.io/s/framer-motion-2-drag-to-reorder-fz6ut?file=/src/use-position-reorder.js:0-1781

import { useEffect, useRef } from 'react';

// const noop = {
// offsetHeight: null,
// offsetTop: null,
// };

export function useMeasurePosition(update: any) {
  // We'll use a `ref` to access the DOM element that the `motion.li` produces.
  // This will allow us to measure its height and position, which will be useful to
  // decide when a dragging element should switch places with its siblings.
  const ref = useRef<any>(null);

  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
    if (ref.current) {
      update({
        height: ref.current.offsetHeight,
        top: ref.current.offsetTop,
      });
    }
  });

  return ref;
}
