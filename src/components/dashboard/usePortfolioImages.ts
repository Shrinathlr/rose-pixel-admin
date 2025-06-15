
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

// Configure your bucket name here
const BUCKET = "profile-photos";

export function usePortfolioImages() {
  const [images, setImages] = useState<{ name: string; publicUrl: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingImageName, setDeletingImageName] = useState<string | null>(null);

  // Get user id for folder path:
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data?.user?.id || null);
    });
  }, []);

  // List files
  const fetchImages = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    const { data, error } = await supabase.storage.from(BUCKET).list(`${userId}/`, {
      limit: 20,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' }
    });
    if (data) {
      // For each image, get the public URL
      const imagesWithUrl = data
        .filter((item) => item.name.match(/\.(jpg|jpeg|png|webp)$/i))
        .map((item) => ({
          name: item.name,
          publicUrl: supabase.storage.from(BUCKET).getPublicUrl(`${userId}/${item.name}`).data.publicUrl,
        }));
      setImages(imagesWithUrl);
    } else {
      setImages([]);
    }
    setIsLoading(false);
  }, [userId]);

  // Fetch whenever userId changes
  useEffect(() => {
    if (userId) fetchImages();
  }, [userId, fetchImages]);

  // Upload image
  const uploadImage = async (file: File) => {
    if (!userId) return;
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const filePath = `${userId}/${Date.now()}_${Math.random().toString(36).substr(2, 6)}.${fileExt}`;
    const { error } = await supabase.storage.from(BUCKET).upload(filePath, file, { upsert: false });
    setUploading(false);
    if (!error) {
      await fetchImages();
    } else {
      alert("Failed to upload image.");
    }
  };

  // Delete image
  const deleteImage = async (filename: string) => {
    if (!userId) return;
    setDeletingImageName(filename);
    const filePath = `${userId}/${filename}`;
    await supabase.storage.from(BUCKET).remove([filePath]);
    setDeletingImageName(null);
    await fetchImages();
  };

  return {
    images,
    isLoading,
    uploading,
    deletingImageName,
    uploadImage,
    deleteImage,
  }
}
