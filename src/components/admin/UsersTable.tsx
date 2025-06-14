
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search, Star } from 'lucide-react';
import { users as allUsers, userActions } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

const UsersTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>;
      case 'Suspended': return <Badge variant="destructive">Suspended</Badge>;
      case 'Pending KYC': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending KYC</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg soft-glow-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search users..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Rating</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map(user => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">{user.email}</div>
              </TableCell>
              <TableCell>{getStatusBadge(user.status)}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right flex justify-end items-center gap-1">
                {user.rating > 0 && (
                  <>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    {user.rating.toFixed(1)}
                  </>
                )}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {userActions.map(action => (
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

export default UsersTable;
