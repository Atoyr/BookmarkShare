"use client"
import {
  useLoaderData,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { type LoaderFunction } from "@remix-run/node";
import { getBookmarkGroupById, getBookmarksByBookmarkGroupId } from "~/services/Bookmark.server";
import { Bookmark } from "~/models";


import { DataTable } from "./DataTable";
import { columns } from "./columns";

export const meta: MetaFunction = () => {
  return [
    { title: "bookmark" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export let loader: LoaderFunction = async ({request, params}) => {
  const spaceId = params["space_id"];
  const bookmarkGroupId = params["bookmark_group_id"];

  if (!spaceId || !bookmarkGroupId) {
    return { title: "bookmark" };
  }

  const bookmarkGroup = await getBookmarkGroupById(request, bookmarkGroupId);
  const bookmarks = await getBookmarksByBookmarkGroupId(request, bookmarkGroupId);

  return { 
    title: bookmarkGroup?.name ?? "bookmark",
    bookmarks: bookmarks ?? [],
  };
}


export default function dashboard() {
  const { title, bookmarks }= useLoaderData<{title: string, bookmarks: Bookmark[]}>();

  return (
    <>
      <div>{title}</div>
      <DataTable columns={columns} data={bookmarks} />
    </>
  );
}


