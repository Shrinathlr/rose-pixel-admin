
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const Disputes: React.FC = () => (
  <div>
    <PageTitle title="Dispute Resolution" subtitle="Manage and resolve user disputes." />
    <Card className="soft-glow-shadow animate-blink">
       <CardContent className="p-6">
        <p>Dispute resolution center will be built here. The blinking effect is a placeholder for new dispute notifications.</p>
      </CardContent>
    </Card>
  </div>
);

export default Disputes;
