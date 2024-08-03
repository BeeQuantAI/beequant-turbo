import { useEffect } from 'react';

/**
 *  Hooks used when component mounted
 *  @param fn
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
