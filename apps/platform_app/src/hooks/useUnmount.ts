import { useEffect } from 'react';
import useLatest from './useLatest';

/**
 *  Hooks used when component gets unmounted
 *  @param fn
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), []);
};

export default useUnmount;
