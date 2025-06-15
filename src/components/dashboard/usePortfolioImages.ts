
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

  // Delete image optimistically, but only refetch if deletion fails.
  const deleteImage = async (filename: string) => {
    if (!userId) return;
    setDeletingImageName(filename);

    // Optimistically remove from UI
    setImages((prev) => prev.filter((img) => img.name !== filename));

    const filePath = `${userId}/${filename}`;
    console.log("Deleting filePath from Supabase Storage:", filePath);
    const { error, data } = await supabase.storage.from(BUCKET).remove([filePath]);
    console.log("Supabase remove response:", { error, data });

    if (!error) {
      toast({
        title: "Deleted",
        description: "Image removed from your gallery.",
      });
      // Do not refetch here! Rely on local state to update UI immediately.
    } else {
      toast({
        variant: "destructive",
        title: "Delete failed",
        description: error.message || "Failed to delete image.",
      });
      // If deletion fails, refetch to restore correct state
      await fetchImages();
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
