import { createClient } from "~/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";

interface OAuthData {
  provider: Provider;
  url: string | null;
}

interface OtpData {
  user: string;
}

function convertToOAuthData(data: {provider: Provider, url: string} | {provider: Provider, url: null}): OAuthData {
  return {
    provider: data.provider,
    url: data.url,
  };
}

export interface SignInResult {
  ok: boolean;
  data: OAuthData | OtpData | null;
  error: string | null;
  headers: Headers | null;
}

export const signInWithGoogle = async (
  redirectPath: string = "http://localhost:3000/auth/callback",
) => {
  const supabase = createClient();
  const { data, error } = await supabase.client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectPath,
    },
  })

  return { 
    ok: !error && data ? true : false,
    data: convertToOAuthData(data),
    error: error ? error.message : "An SignIn error occurred" , 
    headers: supabase.headers,
  }
}
  
export const signInWithEmail = async (
  email: string,
  emailRedirectPath: string = "http://localhost:3000/auth/callback",
) => {
  const supabase = createClient();
  const { data, error } = await supabase.client.auth.signInWithOtp({
    email: email, 
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: emailRedirectPath,
    },
  });

  return { 
    ok: !error && data ? true : false,
    data: data,
    error: error ? error.message : "An SignIn error occurred" , 
    headers: supabase.headers,
  };
}

export const signOut = async (
  request: Request,
  successRedirectPath: string = "/",
) => {
  const supabase = createClient(request);
  const { error } = await supabase.client.auth.signOut();

  return { 
    ok: !error ? true : false,
    data: { url: successRedirectPath }, 
    error: error ? error.message : "",
    headers: supabase.headers,
  };
};

export const getUser = async (
  request: Request,
) => {
  const supabase = createClient(request);

  const {
    data: { session },
  } = await supabase.client.auth.getSession();

  return session?.user ?? null;
};

export const isUserLoggedIn = async (
  request: Request,
) => {
  const supabase = createClient(request);

  const {
    data: { user },
  } = await supabase.client.auth.getUser();

  return !!user;
};
