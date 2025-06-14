
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  ShieldAlert,
  SlidersHorizontal,
  CircleDollarSign,
  Send,
  UserCheck,
  Camera,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/users', icon: Users, label: 'Users' },
  { to: '/admin/bookings', icon: Briefcase, label: 'Bookings' },
  { to: '/admin/disputes', icon: ShieldAlert, label: 'Disputes' },
  { to: '/admin/commissions', icon: SlidersHorizontal, label: 'Commissions' },
  { to: '/admin/finance', icon: CircleDollarSign, label: 'Finance' },
  { to: '/admin/notifications', icon: Send, label: 'Notifications' },
  { to: '/admin/kyc', icon: UserCheck, label: 'KYC' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col border-r bg-black sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavLink
          to="/admin/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Camera className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">PhotoBook Admin</span>
        </NavLink>
        {navItems.map(({ to, icon: Icon, label }) => (
          <Tooltip key={to}>
            <TooltipTrigger asChild>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    isActive ? 'bg-accent text-accent-foreground' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
