
import { supabase } from "@/integrations/supabase/client";

/**
 * Uploads a KYC document for the user to Supabase Storage and returns the storage file URL.
 * File will be stored at bucket/kyc-docs/{userId}/kyc.{ext}
 */
export async function uploadKycDocument(userId: string, file: File): Promise<string | null> {
  if (!userId) return null;
  const ext = file.name.split('.').pop() || "pdf";
  const filePath = `${userId}/kyc.${ext}`;

  // Upload file
  const { error } = await supabase.storage
    .from('kyc-docs')
    .upload(filePath, file, { upsert: true });

  if (error) {
    console.error("KYC upload error:", error);
    return null;
  }

  const { data } = supabase.storage.from('kyc-docs').getPublicUrl(filePath);
  return data.publicUrl || null;
}
