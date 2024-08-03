import { getRouteByKey, getPublicRouteByKey } from '@/routes/routeConfig';
import { useHistory } from 'react-router-dom';

/**
 *  Hooks for jumping to a page
 */
export const useGoTo = () => {
  const history = useHistory();
  const back = () => history.goBack();
  const go = (pageKey?: string, params?: Record<string, string | number>) => {
    if (!pageKey) {
      history.push('/');
      return;
    }
    const route = getRouteByKey(pageKey) || getPublicRouteByKey(pageKey);
    if (route && route.path) {
      if (!params) {
        history.push(`${route.path}`);
        return;
      }
      // /page/:id params: { id: 1 } => /page/1
      const url = route.path.replace(
        /\/:(\w+)/g,
        (_exp: string, exp1: string) => `/${params[exp1]}`
      );
      history.push(`${url}`);
    }
  };
  return { back, go };
};
