
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const BUCKET = "profile-photos";

export function usePortfolioImages() {
  const [images, setImages] = useState<{ name: string; publicUrl: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingImageName, setDeletingImageName] = useState<string | null>(null);

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data?.user?.id || null);
    });
  }, []);

  const fetchImages = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    const { data, error } = await supabase.storage.from(BUCKET).list(`${userId}/`, {
      limit: 20,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' }
    });
    if (error) {
      setImages([]);
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error loading images",
        description: error.message,
      });
      return;
    }
    const imagesWithUrl = (data ?? [])
      .filter((item) => item.name.match(/\.(jpg|jpeg|png|webp)$/i))
      .map((item) => ({
        name: item.name,
        publicUrl: supabase.storage.from(BUCKET).getPublicUrl(`${userId}/${item.name}`).data.publicUrl,
      }));
    setImages(imagesWithUrl);

    // Debug: Log current files according to Supabase listing
    console.log("[Portfolio] Current images in bucket after fetchImages:", (data ?? []).map(d => d.name));
    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    if (userId) fetchImages();
  }, [userId, fetchImages]);

  const uploadImage = async (file: File) => {
    if (!userId) return;
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const filePath = `${userId}/${Date.now()}_${Math.random().toString(36).substr(2, 6)}.${fileExt}`;
    const { error } = await supabase.storage.from(BUCKET).upload(filePath, file, { upsert: false });
    setUploading(false);
    if (!error) {
      toast({
        title: "Success",
        description: "Image uploaded to your gallery.",
      });
      await fetchImages();
    } else {
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: error.message || "Failed to upload image.",
      });
    }
  };

  // Delete image and always refetch images from backend to confirm deletion
  const deleteImage = async (filename: string) => {
    if (!userId) return;
    setDeletingImageName(filename);

    const filePath = `${userId}/${filename}`;
    console.log("[Portfolio] Attempting to delete filePath from Supabase Storage:", filePath);

    // Actual deletion from Supabase
    const { error, data } = await supabase.storage.from(BUCKET).remove([filePath]);
    console.log("[Portfolio] Supabase remove() response:", { error, data });

    // Immediately refetch
    await fetchImages();

    // Refetch list directly from Supabase for verification
    const { data: storageList, error: listError } = await supabase.storage.from(BUCKET).list(`${userId}/`);
    if (listError) {
      console.error("[Portfolio] Error listing storage after delete:", listError);
    } else {
      console.log(`[Portfolio] Storage contents of ${BUCKET}/${userId}/ after delete:`, (storageList ?? []).map(d => d.name));
      // Check if deleted file is still present
      const stillPresent = (storageList ?? []).some(d => d.name === filename);
      if (stillPresent) {
        toast({
          variant: "destructive",
          title: "Delete failed",
          description: "Failed to permanently delete image. Please try again or contact support.",
        });
      }
    }

    if (!error) {
      toast({
        title: "Deleted",
        description: "Image removed from your gallery.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Delete failed",
        description: error.message || "Failed to delete image.",
      });
    }

    setDeletingImageName(null);
  };

  return {
    images,
    isLoading,
    uploading,
    deletingImageName,
    uploadImage,
    deleteImage,
  };
}
