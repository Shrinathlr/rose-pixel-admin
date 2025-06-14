
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  change: string;
  isCurrency?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change, isCurrency = false }) => {
  const { ref, count } = useAnimatedCounter(value);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <Card ref={ref} className="soft-glow-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isCurrency ? formatCurrency(count) : Math.floor(count).toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
