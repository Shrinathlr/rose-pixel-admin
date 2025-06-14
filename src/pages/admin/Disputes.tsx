
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import DisputesTable from '@/components/admin/DisputesTable';

const Disputes: React.FC = () => (
  <div>
    <PageTitle title="Dispute Resolution" subtitle="Manage and resolve user disputes." />
    <DisputesTable />
  </div>
);

export default Disputes;
