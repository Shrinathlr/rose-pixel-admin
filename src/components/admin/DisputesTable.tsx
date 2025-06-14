
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from 'lucide-react';
import { disputes as allDisputes, disputeActions } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

const DisputesTable: React.FC = () => {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open': return <Badge variant="destructive" className="animate-pulse">Open</Badge>;
      case 'Resolved': return <Badge variant="default" className="bg-green-100 text-green-800">{status}</Badge>;
      case 'Pending Review': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg soft-glow-shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dispute ID</TableHead>
            <TableHead>Users Involved</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allDisputes.map(dispute => (
            <TableRow key={dispute.id}>
              <TableCell className="font-medium">{dispute.id}</TableCell>
              <TableCell>
                <div className="font-medium">Client: {dispute.client}</div>
                <div className="text-sm text-muted-foreground">Photographer: {dispute.photographer}</div>
              </TableCell>
              <TableCell>{dispute.reason}</TableCell>
              <TableCell>{dispute.date}</TableCell>
              <TableCell>{getStatusBadge(dispute.status)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {disputeActions.map(action => (
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

export default DisputesTable;
