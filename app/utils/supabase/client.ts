import { createBrowserClient } from '@supabase/ssr';

export function createClient({ supabaseUrl, supabaseAnonKey }: { supabaseUrl: string | null, supabaseAnonKey: string | null}) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }
  return createBrowserClient(
    supabaseUrl!,
    supabaseAnonKey!
  )
};

