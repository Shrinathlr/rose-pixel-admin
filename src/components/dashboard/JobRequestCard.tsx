
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type JobRequest = {
  id: string;
  customer_id: string;
  details: string | null;
  event_date: string | null;
  event_type: string;
  created_at: string | null;
  customer_name?: string | null;
};

const JobRequestCard = () => {
  const [requests, setRequests] = useState<JobRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function fetchRequests() {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }
      // Fetch real customer requests assigned to the logged-in photographer
      // Optionally join customer name from profiles
      const { data, error } = await supabase
        .from("customer_requests")
        .select("*, profiles:customer_id(full_name, profile_photo_url)")
        .eq("photographer_id", user.id);

      if (!ignore) {
        if (error || !data) {
          setRequests([]);
        } else {
          setRequests(
            data.map((req: any) => ({
              ...req,
              customer_name: req.profiles?.full_name ?? "Customer"
            }))
          );
        }
        setLoading(false);
      }
    }
    fetchRequests();
    return () => { ignore = true; };
  }, []);

  return (
    <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
      <CardHeader>
        <CardTitle>Job Requests</CardTitle>
        <CardDescription>
          {loading ? "Loading..." : `You have ${requests.length} new request${requests.length === 1 ? "" : "s"}.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {requests.length === 0 && !loading && (
          <div className="text-muted-foreground text-center">No job requests.</div>
        )}
        {requests.map((req) => (
          <div key={req.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-4">
              <Avatar>
                {/* No customer avatar for now */}
                <AvatarFallback>{req.customer_name?.charAt(0) ?? "C"}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{req.customer_name}</p>
                <p className="text-sm text-muted-foreground">{req.event_type}</p>
                {req.event_date && (
                  <p className="text-xs text-muted-foreground">Date: {req.event_date}</p>
                )}
                {req.details && (
                  <p className="text-xs text-muted-foreground">Note: {req.details}</p>
                )}
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

