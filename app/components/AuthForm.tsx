import * as React from "react"
import { useFetcher } from "@remix-run/react";

// import { Icons } from "~/components/ui/icons"
import { Button } from "~/components/ui/button"
import SigninIcon from "~/assets/google-icons/light/web_light_sq_SI.svg";
import SignupIcon from "~/assets/google-icons/light/web_light_sq_SU.svg";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "signin" | "signup"
}

function GoogleAuthButton({mode}:{mode: "signin" | "signup"} ) {
  return(
    <div className="flex justify-center">
      <Button type="submit" name="mode" value={mode} 
        className="p-0 bg-transparent shadow-none hover:bg-transparent focus:bg-transparent w-auto">
      {mode === "signup" ? (
        <img src={SignupIcon} />
      ) : (
        <img src={SigninIcon} />
      )}
      </Button>
    </div>
  );
}

export function AuthForm({ ...props }: AuthFormProps) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/auth">
      <div className="flex flex-col gap-6"  {...props}>
        {props.mode === "signup" ? (
          <>
            <p className="text-3xl self-stretch text-center">新規登録</p>
            <p className="text-base self-stretch text-center">登録をもって利用規約に同意したものとみなします</p>
            <GoogleAuthButton mode="signup" />
            <p className="text-sm self-stretch text-center">ログインは<Button className="p-0" variant="link">こちら</Button></p>
          </>
        ) : (
          <>
            <p className="text-3xl self-stretch text-center">おかえりなさい</p>
            <GoogleAuthButton mode="signin" />
            <p className="text-sm self-stretch text-center">新規登録は<Button className="p-0" variant="link">こちら</Button></p>
          </>
        )}
      </div>
    </fetcher.Form>
  )
}
