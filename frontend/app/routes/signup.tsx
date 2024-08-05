import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/react";

import { supabase } from "~/lib/supabase";

import { SignUpForm } from "~/features/SignUp";

import { signUpWithEmailSchema } from "~/schemas";

import { commitSession, getSession } from "~/services.server/auth/session";

export const meta: MetaFunction = () => {
  return [
    { title: "signup" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  // `Object.fromEntries` を使用してオブジェクトを構築します。
  const payload = Object.fromEntries(formData);
  // その後、zodでパースします。
  const result = signUpWithEmailSchema.safeParse(payload);

  // データが有効でない場合は、エラーをクライアントに返します。
  if (!result.success) {
    const error = result.error.flatten();

    return {
      payload,
      formErrors: error.formErrors,
      fieldErrors: error.fieldErrors,
    };
  }

  const user = {
    email: result.data.email,
    password: result.data.password,
  };

  const { data, error } = await supabase.auth.signUp(user);

  if (error) {
    return json({
      success: false,
      message: "error!",
      submission: error
    });
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.set("access_token", data!.session!.access_token);
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}


export default function Signup() {
  return (
    <div className="font-sans p-4">
    <SignUpForm />
    </div>
  );
}
