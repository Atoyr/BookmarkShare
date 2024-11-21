"use client"
import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "bookmark" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function dashboard() {
  const params = useParams();
  const spaceId = params["space_id"];
  const bookmarkGroupId = params["bookmark_group_id"];
  console.log(params);

  return (
    <div>param spaces/{spaceId}/bookmark-groups/{bookmarkGroupId}</div>
  );
}


