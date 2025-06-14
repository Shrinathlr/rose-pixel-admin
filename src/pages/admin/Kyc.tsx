
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const Kyc: React.FC = () => (
  <div>
    <PageTitle title="KYC & Portfolio Review" subtitle="Approve photographer verification requests." />
     <Card className="soft-glow-shadow">
      <CardContent className="p-6">
        <p>KYC approval queue will be built here.</p>
      </CardContent>
    </Card>
  </div>
);

export default Kyc;
