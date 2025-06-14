
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

const Onboarding = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-2xl">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl">Create Your Profile</CardTitle>
          <CardDescription>
            Tell us about yourself. This information will be visible to potential clients.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" placeholder="e.g. Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about your passion for photography..." rows={4} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g. San Francisco, CA" />
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
                      <Input id="photo-upload" name="photo-upload" type="file" className="sr-only" />
                    </Label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
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
                       <Input id="kyc-upload" name="kyc-upload" type="file" className="sr-only" />
                    </Label>
                     <p className="pl-1">or drag and drop</p>
                  </div>
                   <p className="text-xs leading-5 text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>
                 <p className="text-xs text-muted-foreground mt-2">To securely store files, I'll need to be connected to a service like Supabase Storage. Would you like me to set that up?</p>
            </div>
          </div>
          <Button className="w-full">Complete Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
