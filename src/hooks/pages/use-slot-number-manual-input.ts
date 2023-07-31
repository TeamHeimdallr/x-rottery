import { ChangeEvent, useCallback, useEffect, useRef } from 'react';

import { SEED } from '~/constants';
import { useSlotNumberManualInputStore } from '~/states/components/slot-number-manual-input';

export const NUM_LENGTH = 6;

export const useSlotNumberManualInput = () => {
  const numbersRef = useRef<(HTMLInputElement | null)[]>([]);
  const { value, setValue, reset } = useSlotNumberManualInputStore();

  const result =
    value.length === 6 && value.every(v => SEED.includes(v.toUpperCase()))
      ? value.join('').toUpperCase()
      : undefined;
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>, i: number) => {
    const { value } = e.target;

    if ((!SEED.includes(value.toUpperCase()) && value !== '') || value.length > 1) {
      e.preventDefault();
      e.target.value = '';
      return false;
    }

    setValue(value, i);

    if (value === '') {
      return false;
    }
    numbersRef.current[i + 1]?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      numbersRef.current = [];
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { numbersRef, value, result, handleChange };
};
