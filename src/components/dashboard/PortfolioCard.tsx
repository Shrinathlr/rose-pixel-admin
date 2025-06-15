import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Trash } from "lucide-react";
import { useRef } from "react";
import { usePortfolioImages } from "@/components/dashboard/usePortfolioImages";
import { toast } from "@/hooks/use-toast";

const PortfolioCard = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    images, isLoading, uploadImage, deleteImage,
    uploading, deletingImageName
  } = usePortfolioImages();

  return (
    <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>My Portfolio</CardTitle>
          <CardDescription>Your sample work for clients to see.</CardDescription>
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={async (e) => {
              if (e.target.files && e.target.files[0]) {
                await uploadImage(e.target.files[0]);
                e.target.value = ""; // So same file can be picked again
              }
            }}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            <Upload className="mr-2 h-4 w-4" />
            {uploading ? "Uploading..." : "Add Photo"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-muted-foreground py-6 text-center">Loading...</div>
        ) : images.length === 0 ? (
          <div className="text-muted-foreground py-6 text-center">No portfolio images yet.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.name} className="relative overflow-hidden rounded-lg group">
                <img
                  src={img.publicUrl}
                  alt="Portfolio"
                  className="h-full w-full object-cover aspect-square transition-transform hover:scale-105"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-80 hover:opacity-100 transition"
                  onClick={() => deleteImage(img.name)}
                  disabled={deletingImageName === img.name}
                  aria-label="Delete"
                >
                  {deletingImageName === img.name ? (
                    <span className="text-xs">...</span>
                  ) : (
                    <Trash className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
