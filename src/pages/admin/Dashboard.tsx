
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import StatCard from '@/components/admin/StatCard';
import EarningsChart from '@/components/admin/EarningsChart';
import { stats } from '@/lib/mock-data';

const Dashboard: React.FC = () => {
  return (
    <div>
      <PageTitle title="Dashboard" subtitle="An overview of your platform's performance." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map(stat => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <EarningsChart />
      </div>
    </div>
  );
};

export default Dashboard;
