import React from 'react';
import { DashboardLayout } from '@src/module/dashboard';
import DashboardPage from '@src/app/(protected)/dashboard/page';
import { AuthProvider } from '@src/module/auth/auth-provider';

const Page: React.FC = () => {
  return (
    < AuthProvider>
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    </AuthProvider>
  );
};


export default Page;