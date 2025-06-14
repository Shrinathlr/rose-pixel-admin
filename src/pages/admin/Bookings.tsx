
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import BookingsTable from '@/components/admin/BookingsTable';

const Bookings: React.FC = () => (
  <div>
    <PageTitle title="Bookings Management" subtitle="Track and manage all bookings." />
    <BookingsTable />
  </div>
);

export default Bookings;
