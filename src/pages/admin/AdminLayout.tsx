
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/admin/Sidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Sidebar />
      <main className="flex flex-1 flex-col gap-4 p-4 sm:p-6 sm:pl-24">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
