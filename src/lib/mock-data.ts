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

export const bookings = [
  { id: "BK001", client: "Alice Johnson", photographer: "Bob Williams", date: "2023-10-25", amount: 1200, status: "Completed" },
  { id: "BK002", client: "Diana Prince", photographer: "George Costanza", date: "2023-11-15", amount: 850, status: "Confirmed" },
  { id: "BK003", client: "Fiona Glenanne", photographer: "Bob Williams", date: "2023-11-20", amount: 450, status: "Pending" },
  { id: "BK004", client: "Hannah Montana", photographer: "Ethan Hunt", date: "2023-10-01", amount: 2500, status: "Cancelled" },
  { id: "BK005", client: "Alice Johnson", photographer: "George Costanza", date: "2023-12-05", amount: 600, status: "Confirmed" },
];

export const bookingActions = [
  { label: "View Details", icon: FileText },
  { label: "Cancel Booking", icon: UserX },
];

export const disputes = [
  { id: "DIS001", client: "Alice Johnson", photographer: "Bob Williams", reason: "Photos not delivered", date: "2023-11-01", status: "Open" },
  { id: "DIS002", client: "Diana Prince", photographer: "George Costanza", reason: "Quality did not match portfolio", date: "2023-11-18", status: "Pending Review" },
  { id: "DIS003", client: "Fiona Glenanne", photographer: "Bob Williams", reason: "Incorrect charge", date: "2023-11-22", status: "Resolved" },
];

export const disputeActions = [
  { label: "Review Evidence", icon: FileText },
  { label: "Resolve Dispute", icon: ShieldCheck },
  { label: "Contact Users", icon: MessageSquareWarning },
];

export const commissionRates = [
  { id: 'wedding', category: 'Wedding Photography', rate: 20 },
  { id: 'portrait', category: 'Portrait Sessions', rate: 15 },
  { id: 'event', category: 'Event Coverage', rate: 18 },
  { id: 'commercial', category: 'Commercial Shoots', rate: 25 },
];

export const payouts = [
    { id: "PAY001", photographer: "Bob Williams", amount: 2850.75, date: "2023-11-10", status: "Paid" },
    { id: "PAY002", photographer: "George Costanza", amount: 1500.00, date: "2023-11-12", status: "Paid" },
    { id: "PAY003", photographer: "Ethan Hunt", amount: 950.50, date: "2023-11-15", status: "Processing" },
    { id: "PAY004", photographer: "Bob Williams", amount: 3200.00, date: "2023-11-20", status: "Pending" },
];

export const payoutActions = [
    { label: "Mark as Paid", icon: BadgeCheck },
    { label: "View Details", icon: FileText },
];

export const kycRequests = [
    { id: "KYC001", photographer: "Ethan Hunt", date: "2023-05-12", status: "Pending Review" },
    { id: "KYC002", photographer: "New Photographer", date: "2023-11-18", status: "Needs Resubmission" },
    { id: "KYC003", photographer: "Jane Doe", date: "2023-11-20", status: "Pending Review" },
    { id: "KYC004", photographer: "John Smith", date: "2023-11-21", status: "Approved" },
];

export const kycActions = [
    { label: "Approve", icon: BadgeCheck },
    { label: "Request Resubmission", icon: MessageSquareWarning },
    { label: "View Documents", icon: FileText },
];
