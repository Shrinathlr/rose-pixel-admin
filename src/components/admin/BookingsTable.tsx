
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search } from 'lucide-react';
import { bookings as allBookings, bookingActions } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

const BookingsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBookings = allBookings.filter(booking =>
    booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.photographer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed': return <Badge variant="default" className="bg-green-100 text-green-800">{status}</Badge>;
      case 'Confirmed': return <Badge variant="default" className="bg-blue-100 text-blue-800">{status}</Badge>;
      case 'Pending': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case 'Cancelled': return <Badge variant="destructive">{status}</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg soft-glow-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search bookings..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Photographer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBookings.map(booking => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.client}</TableCell>
              <TableCell>{booking.photographer}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>${booking.amount.toFixed(2)}</TableCell>
              <TableCell>{getStatusBadge(booking.status)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {bookingActions.map(action => (
                      <DropdownMenuItem key={action.label} className="flex items-center gap-2">
                        <action.icon className="h-4 w-4" />
                        <span>{action.label}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingsTable;
