import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { supabase } from "~/lib/supabase";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export const meta: MetaFunction = () => {
  return [
    { title: "signup" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// TODO use Form
function SignupForm() {
  return (
    <Form method="post">
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Signup
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="/">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </Form>
  )
}

export async function action({
  request,
}: ActionFunctionArgs) {
  const body = await request.formData();
  const user = {
//    email: body.get("email") as string,
//    password: body.get("pasword") as string,
    email:'sample@gmail.com',
    password: 'password',
  };

  const { data, error } = await supabase.auth.signUp(user);

  if (error) {
    console.log(error);
  }

  console.log(data);
  return data;
}


export default function Signup() {
  return (
    <div className="font-sans p-4">
    <SignupForm />
    </div>
  );
}
