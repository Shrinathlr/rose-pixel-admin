
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const Commissions: React.FC = () => (
  <div>
    <PageTitle title="Commission Setup" subtitle="Configure platform commission rates." />
    <Card className="soft-glow-shadow">
      <CardContent className="p-6">
        <p>Commission settings interface will be built here.</p>
      </CardContent>
    </Card>
  </div>
);

export default Commissions;
