
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src="https://i.pravatar.cc/150?u=shrinath-photographer" alt="Photographer" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">Shrinath</h3>
        <p className="text-muted-foreground">Pune, India</p>
        <p className="mt-4 text-sm">
          Passionate landscape and portrait photographer with 5+ years of experience capturing life's beautiful moments.
        </p>
        <Button variant="outline" size="sm" className="mt-4">
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
