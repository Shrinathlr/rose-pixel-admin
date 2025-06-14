
import { BarChart, Users, DollarSign, Activity, ShieldCheck, Camera, Star, Briefcase, FileText, BadgeCheck, UserX, MessageSquareWarning } from 'lucide-react';

export const stats = [
  { title: "Total Revenue", value: 45231.89, icon: DollarSign, change: "+20.1% from last month", isCurrency: true },
  { title: "Active Users", value: 2350, icon: Users, change: "+180.1% from last month" },
  { title: "Active Bookings", value: 124, icon: Briefcase, change: "+19% from last month" },
  { title: "Pending KYC", value: 32, icon: ShieldCheck, change: "+5 since last hour" },
];

export const chartData = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 },
];

export const users = [
  { id: "USR001", name: "Alice Johnson", email: "alice@example.com", role: "Client", status: "Active", city: "New York", rating: 4.5, joined: "2023-01-15" },
  { id: "USR002", name: "Bob Williams", email: "bob@example.com", role: "Photographer", status: "Active", city: "Los Angeles", rating: 4.9, joined: "2023-02-20" },
  { id: "USR003", name: "Charlie Brown", email: "charlie@example.com", role: "Photographer", status: "Suspended", city: "Chicago", rating: 3.2, joined: "2023-03-10" },
  { id: "USR004", name: "Diana Prince", email: "diana@example.com", role: "Client", status: "Active", city: "Houston", rating: 5.0, joined: "2023-04-05" },
  { id: "USR005", name: "Ethan Hunt", email: "ethan@example.com", role: "Photographer", status: "Pending KYC", city: "Phoenix", rating: 0, joined: "2023-05-12" },
  { id: "USR006", name: "Fiona Glenanne", email: "fiona@example.com", role: "Client", status: "Active", city: "Philadelphia", rating: 4.8, joined: "2023-06-18" },
  { id: "USR007", name: "George Costanza", email: "george@example.com", role: "Photographer", status: "Active", city: "New York", rating: 4.2, joined: "2023-07-21" },
  { id: "USR008", name: "Hannah Montana", email: "hannah@example.com", role: "Client", status: "Active", city: "San Diego", rating: 4.9, joined: "2023-08-30" },
];

export const userActions = [
  { label: "View Profile", icon: FileText },
  { label: "Verify KYC", icon: BadgeCheck },
  { label: "Send Warning", icon: MessageSquareWarning },
  { label: "Suspend User", icon: UserX },
]
