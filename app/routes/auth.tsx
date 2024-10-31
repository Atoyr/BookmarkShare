import { ActionFunction, redirect, json} from "@remix-run/node";

import { signInWithGoogle } from "~/utils/supabase/auth.server";
import { AuthForm } from '../components/AuthForm';

export const action: ActionFunction = async ({ request }) => {

  try {
    const result = await signInWithGoogle("http://localhost:5173/auth/callback?flow=signin");
    if (result.ok) {
      return redirect(result.data.url || "",  { headers: result.headers }); // 成功時のリダイレクト先を指定
    } else {
      return json({ error: result.error }, { status: 400 });
    }
  } catch (error) {
    return json({ error: error }, { status: 400 });
  }
};

export default function auth() {
  // TODO: モードに応じてsinguupとsigninを切り
  return (
    <>
      <div className="md:hidden">
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <AuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
                Terms of Service
              and{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
