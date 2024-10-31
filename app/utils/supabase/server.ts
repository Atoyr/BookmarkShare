import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'


export function createClient(request: Request | null = null) {
  const headers = new Headers();

  const client = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request?.headers.get("Cookie") ?? "");
        },
        setAll(cookiesToSet) {
					for (const cookie of cookiesToSet) {
						const { name, value, options } = cookie;
						headers.append(
							"Set-Cookie",
							serializeCookieHeader(name, value, options),
						);
					}
        },
      },
      cookieOptions: {
        httpOnly: true,
        secure: true,
      },
  });

  return { client, headers };
}
