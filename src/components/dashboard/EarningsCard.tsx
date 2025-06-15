
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const EarningsCard = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
      <CardHeader>
        <CardTitle>Earnings</CardTitle>
        <CardDescription>Your earnings this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-primary">$0.00</p>
        <p className="text-sm text-muted-foreground mt-1">No earnings yet</p>
      </CardContent>
    </Card>
  );
};

export default EarningsCard;
