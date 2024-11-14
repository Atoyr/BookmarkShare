import { createClient } from "./server";

export async function fetchProfileAsync(userId: string) {
  const supabase = createClient();
  const { data: profile, error } = await supabase.client
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    // エラーハンドリング
    throw new Response('プロフィールの取得に失敗しました', { status: 500 });
  }
  // TODO: return data;
};
