import { createClient } from "~/utils/supabase/server";
import { type AuthChangeEvent, type Session } from "@supabase/supabase-js";
import type { SignInResult } from "~/utils/supabase/auth.types";
import { convertToOAuthData, convertToOptData } from "~/utils/supabase/auth.types";

export const signInWithGoogle = async (
  request: Request,
  redirectPath: string = "http://localhost:3000/auth/callback",
): Promise<SignInResult> => {
  const supabase = createClient(request);
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
): Promise<SignInResult> => {
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
    data: convertToOptData(data),
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

export const onAuthStateChange = (
  request: Request,
  callback: (event: AuthChangeEvent, session: Session | null ) => void
) => {
  const supabase = createClient(request);
  const { data: authListener } = supabase.client.auth.onAuthStateChange(callback);
  return authListener;
}
