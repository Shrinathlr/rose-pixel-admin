
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import CommissionSettings from '@/components/admin/CommissionSettings';

const Commissions: React.FC = () => (
  <div>
    <PageTitle title="Commission Setup" subtitle="Configure platform commission rates." />
    <CommissionSettings />
  </div>
);

export default Commissions;
