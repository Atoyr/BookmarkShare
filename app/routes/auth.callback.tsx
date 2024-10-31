import { redirect, type LoaderFunctionArgs } from '@remix-run/node'

import { createClient } from '~/utils/supabase/server';

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/dashboard';
  const flow = requestUrl.searchParams.get('flow');

  if (code) {
    const { client,  headers}  = createClient(request);
    const supabase = client;

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return redirect(next, { headers })
    }
  }

  const headers = new Headers()
  // return the user to an error page with instructions
  return redirect('/auth/auth-code-error', { headers })
}
