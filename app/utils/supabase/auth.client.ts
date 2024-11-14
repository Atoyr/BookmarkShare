import { createClient } from "~/utils/supabase/client";
import { type AuthChangeEvent, type Session } from "@supabase/supabase-js";
import type { SignInResult } from "~/utils/supabase/auth.types";
import { convertToOAuthData, convertToOptData } from "~/utils/supabase/auth.types";

export type clientOptions = {
  url: string | null;
  key: string | null;
}

export const signInWithGoogle = async (
  options: clientOptions,
  redirectPath: string = "http://localhost:3000/auth/callback",
): Promise<SignInResult> => {
  const supabase = createClient({ supabaseUrl : options.url, supabaseAnonKey: options.key} );
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectPath,
    },
  })

  return { 
    ok: !error && data ? true : false,
    data: convertToOAuthData(data),
    error: error ? error.message : "An SignIn error occurred" , 
    headers: null, 
  }
}
  
export const signInWithEmail = async (
  options: clientOptions,
  email: string,
  emailRedirectPath: string = "http://localhost:3000/auth/callback",
): Promise<SignInResult> => {
  const supabase = createClient({ supabaseUrl : options.url, supabaseAnonKey: options.key} );
  const { data, error } = await supabase.auth.signInWithOtp({
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
    headers: null
  };
}

export const signOut = async (
  options: clientOptions,
  successRedirectPath: string = "/",
) => {
  const supabase = createClient({ supabaseUrl : options.url, supabaseAnonKey: options.key} );
  const { error } = await supabase.auth.signOut();

  return { 
    ok: !error ? true : false,
    data: { url: successRedirectPath }, 
    error: error ? error.message : "",
    headers: null
  };
};

export const getUser = async (
  options: clientOptions,
) => {
  const supabase = createClient({ supabaseUrl : options.url, supabaseAnonKey: options.key} );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user ?? null;
};

export const isUserLoggedIn = async (
  options: clientOptions,
) => {
  const supabase = createClient({ supabaseUrl : options.url, supabaseAnonKey: options.key} );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !!user;
};

export const onAuthStateChange = (
  options: clientOptions,
  callback: (event: AuthChangeEvent, session: Session | null ) => void
) => {
  const supabase = createClient({ supabaseUrl : options.url, supabaseAnonKey: options.key} );
  const { data: authListener } = supabase.auth.onAuthStateChange(callback);
  return authListener;
}

