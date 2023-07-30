import { useEffect, useRef, useState } from 'react';

import { SEED } from '~/constants';

export const NUM_LENGTH = 6;

export const useSlotNumberAutoGenerator = () => {
  const [result, setResult] = useState('');

  const delay = useRef<number>(1); // delay in ticks
  const tickCount = useRef<number>(10); // how many times it generates a number before moving on to the next

  const currentTick = useRef<number>(0);
  const frame = useRef<number>(0);
  const position = useRef<number>(0);

  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

  const tick = () => {
    frame.current++;

    if (frame.current > delay.current) {
      currentTick.current++;
      frame.current = 0;

      for (let i = position.current; i < NUM_LENGTH; i++) {
        if (numbersRef.current?.[i]) {
          const seed = SEED[Math.floor(Math.random() * SEED.length)];
          const current = numbersRef.current?.[i];
          if (current) {
            current.innerHTML = seed;
          }
        }
      }
    }

    if (currentTick.current > tickCount.current - 5) {
      position.current++;
      currentTick.current = 0;
    }

    if (position.current < NUM_LENGTH) {
      requestAnimationFrame(tick);
    } else {
      // end
      const result = numbersRef.current.map(num => num?.innerHTML ?? '').join('');
      setResult(result);

      position.current = 0;
    }
  };

  useEffect(() => {
    return () => {
      numbersRef.current = [];
    };
  }, []);

  return { tick, numbersRef, result };
};
