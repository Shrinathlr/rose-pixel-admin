
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import UsersTable from '@/components/admin/UsersTable';

const Users: React.FC = () => {
  return (
    <div>
      <PageTitle title="User Management" subtitle="View, search, and manage all users." />
      <UsersTable />
    </div>
  );
};

export default Users;
