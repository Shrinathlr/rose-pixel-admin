
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import PayoutsTable from '@/components/admin/PayoutsTable';

const Finance: React.FC = () => (
  <div>
    <PageTitle title="Financial Dashboard" subtitle="Monitor payouts and earnings." />
    <PayoutsTable />
  </div>
);

export default Finance;
