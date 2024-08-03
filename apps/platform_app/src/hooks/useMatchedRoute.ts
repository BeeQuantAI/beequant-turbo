import { matchPath, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { routes } from '@/routes/routeConfig';

export const useMatchedRoute = () => {
  const r = useLocation();
  const route = useMemo(
    () => routes.find((item) => matchPath(`/${item.path}`, r.pathname)),
    [r.pathname]
  );
  return route;
};
