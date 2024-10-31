import * as React from "react"
import { useFetcher } from "@remix-run/react";

// import { Icons } from "~/components/ui/icons"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function AuthForm({ ...props }: AuthFormProps) {
  const fetcher = useFetcher();
  const [email, setEmail] = React.useState<string>("");
  const isLoading = fetcher.state === "submitting";

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    fetcher.submit({ email }, { method: "post", action: "/auth" });
  }

  return (
    <div className="grid gap-6" {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <p>isLoading</p>
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
              <p>isLoading</p>
        ) : (
              <p>isLoaded</p>
        )}{" "}
        GitHub
      </Button>
    </div>
  )
}
