import { Form, Link } from "@remix-run/react";

import { useForm, getFormProps, getInputProps } from "@conform-to/react";
import { parseWithZod } from '@conform-to/zod';

import { signUpWithEmailSchema } from "~/schemas";

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

export const SignUpForm = () => {
  const [form, { email, password }] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signUpWithEmailSchema })
    },
  });

  return (
    <Form method="POST" {...getFormProps(form)}>
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
              <Input {...getInputProps(email, { type: "email" })} />
              {email.errors && (
                <div>
                  {email.errors.map((e, index) => (
                    <p key={index}>{e}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/">
                  Forgot your password?
                </Link>
              </div>
              <Input {...getInputProps(password, { type: "password" })} />
              {password.errors && (
                <div>
                  {password.errors.map((e, index) => (
                    <p key={index}>{e}</p>
                  ))}
                </div>
              )}
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
