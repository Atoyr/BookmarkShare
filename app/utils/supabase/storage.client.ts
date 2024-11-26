import { createClient } from "./client";
import type { SupabaseClientArgs } from "./client";

export async function uploadAvatar(file: File, userId: string, clientArgs: SupabaseClientArgs) {
  const supabase = createClient(clientArgs);
  const { data, error } = await supabase.storage.from("avatars").upload(`public/${userId}/avatar`, file, {
    cacheControl: "3600",
    upsert: false,
  });
  return { data, error };
}
