import { useEffect, useState } from 'react';
import { getUser } from '~/utils/supabase/auth.server';


type User = {
  email: string | null;
};

export const useAuth = (request: Request) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // 初回ロード時にセッションを取得
    const fetchUser = async () => {
      const user = await getUser(request);
      setUser({email: user?.email ?? null});
      setLoading(false);
    };

    fetchUser();

    // 認証状態の変化を監視
    // const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
    //   setUser(session?.user || null);
    // });

    // クリーンアップ
    // return () => {
    //   authListener.subscription.unsubscribe();
    // };
  }, []);

  return { isLoggedIn: !!user, user};
};

