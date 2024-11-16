import { createBrowserClient } from '@supabase/ssr';

export interface SupabaseClientArgs {
  supabaseUrl: string | null, 
  supabaseAnonKey: string | null
}

export function createClient({ supabaseUrl, supabaseAnonKey }: SupabaseClientArgs) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }
  return createBrowserClient(
    supabaseUrl!,
    supabaseAnonKey!
  )
};
