
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from 'lucide-react';
import { payouts as allPayouts, payoutActions } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PayoutsTable: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return <Badge variant="default" className="bg-green-100 text-green-800">{status}</Badge>;
      case 'Pending': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case 'Processing': return <Badge variant="default" className="bg-blue-100 text-blue-800">{status}</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card className="soft-glow-shadow">
      <CardHeader>
        <CardTitle>Payout Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Photographer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allPayouts.map(payout => (
              <TableRow key={payout.id}>
                <TableCell className="font-medium">{payout.photographer}</TableCell>
                <TableCell>${payout.amount.toFixed(2)}</TableCell>
                <TableCell>{payout.date}</TableCell>
                <TableCell>{getStatusBadge(payout.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {payoutActions.map(action => (
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
      </CardContent>
    </Card>
  );
};

export default PayoutsTable;
