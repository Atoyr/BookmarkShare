import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="font-sans p-4">
    <Button onClick={() => navigate("/bookmarks")}>DASHBOARD</Button>
    </div>
  );
}

