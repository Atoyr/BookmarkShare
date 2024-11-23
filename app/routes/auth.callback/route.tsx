import { redirect, type LoaderFunctionArgs } from '@remix-run/node'

import { createClient } from '~/utils/supabase/server';
import { signup } from '~/services/Signup.server';
import { getProfileByUserId } from '~/services/Profile.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/home';
  const flow = requestUrl.searchParams.get('flow');

  if (code) {
    const { client: supabase,  headers}  = createClient(request);

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      // TODO: error Code
      return redirect('/auth/auth-code-error', { headers });
    }

    const result = await supabase.auth.getSession();
    if (result.error || !result.data.session) {
      // TODO: error Code
      return redirect('/auth/auth-code-error', { headers });
    }
    const userId = result.data.session.user.id;

    const profile = await getProfileByUserId(request, userId);

    if (flow === 'signup' && !profile) {
      const displayName = result.data.session.user.user_metadata?.full_name || result.data.session.user.user_metadata?.username || '匿名ユーザー';
      const email = result.data.session.user.email;
      signup(request, userId, displayName, email);
    } else if (flow === 'signin' && !profile) {
      // TODO: error and redirect signin
      return redirect('/auth?mode=signup', { headers });
    }
    return redirect(next, { headers });
  }

  const headers = new Headers()
  // return the user to an error page with instructions
  return redirect('/auth/auth-code-error', { headers })
}
