import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash';

const events = new Set();
const onResize = () => events.forEach(fn => fn());

function useWindowSize(options = {}) {
  const { throttleMs = 100 } = options;

  const [size, setSize] = useState({
    width: process.browser && window.innerWidth,
    height: process.browser && window.innerHeight,
  });

  const handle = useCallback(
    throttle(() => {
      setSize({
        width: process.browser && window.innerWidth,
        height: process.browser && window.innerHeight,
      });
    }, throttleMs),
    [throttleMs],
  );

  useEffect(() => {
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
  }, [handle]);

  return size;
}

export default useWindowSize;
