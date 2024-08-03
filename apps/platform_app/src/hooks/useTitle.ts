import { useEffect } from 'react';

/**
 *  Hooks for setting application title
 *  @param fn
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
