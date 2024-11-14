import { type Provider } from "@supabase/supabase-js";

export interface OAuthData {
  provider: Provider;
  url: string | null;
}

export interface OtpData {
  user: string;
}

export function convertToOAuthData(data: {provider: Provider, url: string} | {provider: Provider, url: null}): OAuthData {
  return {
    provider: data.provider,
    url: data.url,
  };
}
export function convertToOptData(data: any): OtpData {
  return {
    user: data.user as string,
  };
}

export interface SignInResult {
  ok: boolean;
  data: OAuthData | OtpData | null;
  error: string | null;
  headers: Headers | null;
}

