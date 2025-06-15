
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Profile = {
  full_name: string | null;
  bio: string | null;
  location: string | null;
  profile_photo_url: string | null;
  onboarded: boolean | null;
  email: string | null;
};

const ProfileCard = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchProfile() {
      setLoading(true);
      // Get current session user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }
      // Fetch profile for this user
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          setProfile(null);
        } else {
          setProfile(data as Profile);
        }
        setLoading(false);
      }
    }
    fetchProfile();
    return () => { ignore = true; };
  }, []);

  if (loading) {
    return (
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-muted rounded-full mb-4" />
            <div className="h-6 w-24 bg-muted mb-2 rounded" />
            <div className="h-4 w-32 bg-muted mb-2 rounded" />
            <div className="h-3 w-40 bg-muted rounded" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!profile) {
    return (
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">No profile data found.</p>
          <Button variant="outline" className="mt-4" asChild>
            <a href="/onboarding">
              <Edit className="mr-2 h-4 w-4" />
              Create Profile
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>My Profile</CardTitle>
          {profile.onboarded && (
            <Badge variant="secondary" className="flex items-center gap-1 px-2 py-1 text-xs">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              Verified
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={profile.profile_photo_url || undefined} alt={profile.full_name || "Profile"} />
          <AvatarFallback>
            {profile.full_name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "PH"}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">{profile.full_name}</h3>
        <p className="text-muted-foreground">{profile.location}</p>
        {profile.bio && <p className="mt-4 text-sm">{profile.bio}</p>}
        <Button variant="outline" size="sm" className="mt-4" asChild>
          <a href="/onboarding">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
