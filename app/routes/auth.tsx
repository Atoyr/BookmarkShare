import { ActionFunction, redirect, json} from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

import { signInWithGoogle } from "~/utils/supabase/auth.server";
import { AuthForm } from '../components/AuthForm';
import type { OAuthData } from "~/utils/supabase/auth.types";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const flow = formData.get("mode") as "signin" | "signup";

  const result = await signInWithGoogle(request, `http://localhost:5173/auth/callback?flow=${flow}`);

  try {
    if (result.ok) {
      const url = (result!.data as OAuthData).url || "/";
      return redirect(url, { headers: result.headers ?? undefined }); // 成功時のリダイレクト先を指定
    } else {
      return json({ error: result.error }, { status: 400 });
    }
  } catch (error) {
    return json({ error: error }, { status: 400 });
  }
};

export default function auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") === "signup" ? "signup" : "signin";

  // TODO: 画面レイアウト
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
          <AuthForm mode={mode}/>
        </div>
      </div>
    </>
  );
}
