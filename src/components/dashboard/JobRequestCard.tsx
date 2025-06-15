
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const requests = [
  { name: 'Aarti Sharma', event: 'Wedding Photography', avatar: 'https://i.pravatar.cc/150?u=sharma123a' },
  { name: 'Rahul Verma', event: 'Corporate Headshots', avatar: 'https://i.pravatar.cc/150?u=rahul892v' },
];

const JobRequestCard = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
      <CardHeader>
        <CardTitle>Job Requests</CardTitle>
        <CardDescription>You have {requests.length} new requests.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {requests.map((req) => (
          <div key={req.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={req.avatar} />
                <AvatarFallback>{req.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{req.name}</p>
                <p className="text-sm text-muted-foreground">{req.event}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Reject</Button>
              <Button size="sm">Accept</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default JobRequestCard;
