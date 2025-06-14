
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const Notifications: React.FC = () => (
  <div>
    <PageTitle title="Notification Manager" subtitle="Send broadcasts and manage alerts." />
     <Card className="soft-glow-shadow">
      <CardContent className="p-6">
        <p>Notification manager will be built here.</p>
      </CardContent>
    </Card>
  </div>
);

export default Notifications;
