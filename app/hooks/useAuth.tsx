import { useEffect, useState } from 'react';
import { 
  signInWithGoogle as signInWithGoogleForSupabase, 
  signOut as signOutForSupabase, 
  getUser, 
  onAuthStateChange } from '~/utils/supabase/auth.client';

import type { clientOptions } from '~/utils/supabase/auth.client';

type User = {
  email: string | null;
};

export const useAuth = ( options: clientOptions,) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // 初回ロード時にセッションを取得
    const fetchUser = async () => {
      const user = await getUser(options);
      setUser({email: user?.email ?? null});
      setLoading(false);
    };

    fetchUser();

    const authListener = onAuthStateChange(options, (_event, session) => {
      setUser({email: session?.user?.email ?? null});
    });

    // クリーンアップ
    return () => {
       authListener.subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async (redirectPath: string | undefined) => {
    return await signInWithGoogleForSupabase(options, redirectPath);
  };

  const signOut = async (successRedirectPath: string | undefined) => {
    const { ok, data, error} = await signOutForSupabase(options, successRedirectPath);
    if (ok) {
      setUser(null);
    }
    return { ok, data, error};
  };

  return { 
    isLoggedIn: !!user, 
    loading, 
    user, 
    signInWithGoogle, 
    signOut};
};

