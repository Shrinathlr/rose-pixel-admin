import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { uploadProfilePhoto } from "@/lib/uploadProfilePhoto";
import { toast } from "@/components/ui/use-toast";

const Onboarding = () => {
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [kycDoc] = useState<File | null>(null); // You can wire up upload logic as desired
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Ensure user is authenticated before continuing (extra guard for direct navigation)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate("/auth");
      }
    });
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("You must be signed in.");

      // Upload photo (if selected)
      let profilePhotoUrl: string | null = null;
      if (profilePhoto) {
        profilePhotoUrl = await uploadProfilePhoto(user.id, profilePhoto);
        if (!profilePhotoUrl) throw new Error("Photo upload failed");
      }

      // Update profile row
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          bio,
          location,
          profile_photo_url: profilePhotoUrl,
          onboarded: true,
        })
        .eq("id", user.id);

      if (error) throw new Error(error.message);

      toast({
        title: "Profile created 🎉",
        description: "Your profile is now live!",
      });

      // Redirect to dashboard after short delay
      setTimeout(() => navigate("/"), 1200);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-2xl">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl">Create Your Profile</CardTitle>
          <CardDescription>
            Tell us about yourself. This information will be visible to potential clients.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="e.g. Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" value={bio} onChange={e => setBio(e.target.value)} placeholder="Tell us about your passion for photography..." rows={4} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. San Francisco, CA" required />
            </div>
            <div className="space-y-4">
              <div>
                <Label>Profile Photo</Label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border px-6 py-10">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                      <Label
                        htmlFor="photo-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary/80"
                      >
                        <span>Upload a file</span>
                        <Input
                          id="photo-upload"
                          name="photo-upload"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={e => setProfilePhoto(e.target.files?.[0] || null)}
                          required
                        />
                      </Label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">
                      {profilePhoto ? profilePhoto.name : "PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Label>KYC Document (Government ID)</Label>
                <p className="text-xs text-muted-foreground mb-2">For verification purposes only. This will not be shared publicly.</p>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border px-6 py-10">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                      <Label
                        htmlFor="kyc-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary/80"
                      >
                        <span>Upload ID</span>
                        <Input id="kyc-upload" name="kyc-upload" type="file" className="sr-only" disabled />
                      </Label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
                {/* To securely store files, I'll need to be connected to a service like Supabase Storage. */}
              </div>
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Complete Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
