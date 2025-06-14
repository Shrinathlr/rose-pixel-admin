
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const AvailabilityCard = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
      <CardHeader>
        <CardTitle>Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Label htmlFor="availability-toggle" className="text-base">
            Available for new jobs
          </Label>
          <Switch id="availability-toggle" defaultChecked />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Toggle this to show up in client searches.
        </p>
      </CardContent>
    </Card>
  );
};

export default AvailabilityCard;
