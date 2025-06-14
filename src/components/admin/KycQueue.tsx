
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from 'lucide-react';
import { kycRequests as allKycRequests, kycActions } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const KycQueue: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending Review': return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case 'Needs Resubmission': return <Badge variant="destructive">{status}</Badge>;
      case 'Approved': return <Badge variant="default" className="bg-green-100 text-green-800">{status}</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card className="soft-glow-shadow">
      <CardHeader>
        <CardTitle>KYC Approval Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Photographer</TableHead>
              <TableHead>Date Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allKycRequests.map(request => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.photographer}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {kycActions.map(action => (
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

export default KycQueue;
