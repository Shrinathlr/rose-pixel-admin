
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import KycQueue from '@/components/admin/KycQueue';

const Kyc: React.FC = () => (
  <div>
    <PageTitle title="KYC & Portfolio Review" subtitle="Approve photographer verification requests." />
    <KycQueue />
  </div>
);

export default Kyc;
