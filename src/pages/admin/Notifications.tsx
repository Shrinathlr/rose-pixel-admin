
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import NotificationSender from '@/components/admin/NotificationSender';

const Notifications: React.FC = () => (
  <div>
    <PageTitle title="Notification Manager" subtitle="Send broadcasts and manage alerts." />
    <NotificationSender />
  </div>
);

export default Notifications;
