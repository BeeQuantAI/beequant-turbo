import { ReactNode } from 'react';
import { WrappedRoutes } from '@/shared/Layout/Routes/WrappedRoutes';

const Layout = ({ children }: { children: ReactNode }) => (
  <WrappedRoutes>
    <div>{children}</div>
  </WrappedRoutes>
);

export default Layout;
