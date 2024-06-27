import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { SignupForm } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Dashboard() {
  return (
    <div className="font-sans p-4">
    <SignupForm />
    </div>
  );
}



