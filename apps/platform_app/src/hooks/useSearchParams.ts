import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

interface ReadOnlyURLSearchParams extends URLSearchParams {
  append: never;
  set: never;
  delete: never;
  sort: never;
}

/**
 *  Hooks for getting url search params
 */
export function useSearchParams() {
  // const { search } = useLocation();
  const pathName = usePathname();

  return useMemo(() => new URLSearchParams(pathName) as ReadOnlyURLSearchParams, [pathName]);
}
