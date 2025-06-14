
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const Bookings: React.FC = () => (
  <div>
    <PageTitle title="Bookings Management" subtitle="Track and manage all bookings." />
    <Card className="soft-glow-shadow">
      <CardContent className="p-6">
        <p>Booking management interface will be built here.</p>
      </CardContent>
    </Card>
  </div>
);

export default Bookings;
