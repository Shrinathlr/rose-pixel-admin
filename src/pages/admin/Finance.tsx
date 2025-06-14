
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const Finance: React.FC = () => (
  <div>
    <PageTitle title="Financial Dashboard" subtitle="Monitor payouts and earnings." />
     <Card className="soft-glow-shadow">
      <CardContent className="p-6">
        <p>Financial dashboard with payout requests will be built here.</p>
      </CardContent>
    </Card>
  </div>
);

export default Finance;
