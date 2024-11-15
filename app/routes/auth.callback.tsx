import { redirect, type LoaderFunctionArgs } from '@remix-run/node'

import { createClient } from '~/utils/supabase/server';
import { ProfilesRepository } from '~/repositories/ProfilesRepository.server';


export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/dashboard';
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

    const profilesRepo = new ProfilesRepository(supabase);
    const profile = await profilesRepo.getProfileById(userId);

    if (flow === 'signup' && !profile) {
      const displayName = result.data.session.user.user_metadata?.full_name || result.data.session.user.user_metadata?.username || '匿名ユーザー';
      const email = result.data.session.user.email;
      profilesRepo.createProfile({username: displayName, email: email ?? "", user_id: userId});
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

function signin() : {error: string} {
  return {error: "" };
}

function signup() {
}
