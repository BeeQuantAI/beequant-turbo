import { useRef } from 'react';

/**
 *  Get the latest value of T
 *  @param fn
 */
const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
