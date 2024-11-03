"use client"
import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function dashboard() {
  const params = useParams();
  const spaceId = params["space_id"];
  console.log(params);

  return (
    <div>param spaces/{spaceId}</div>
  );
}

