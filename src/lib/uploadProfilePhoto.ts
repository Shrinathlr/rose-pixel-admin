
import { supabase } from "@/integrations/supabase/client";

/**
 * Uploads a profile photo to Supabase Storage and returns the public URL.
 * File will be stored at bucket/profile-photos/{userId}/profile.{ext}
 */
export async function uploadProfilePhoto(userId: string, file: File): Promise<string | null> {
  if (!userId) return null;
  const ext = file.name.split('.').pop() || "jpg";
  const filePath = `${userId}/profile.${ext}`;

  // Upload file
  const { error } = await supabase.storage
    .from('profile-photos')
    .upload(filePath, file, { upsert: true });

  if (error) {
    console.error("Photo upload error:", error);
    return null;
  }

  // Get public URL
  const { data } = supabase.storage.from('profile-photos').getPublicUrl(filePath);
  return data.publicUrl || null;
}
