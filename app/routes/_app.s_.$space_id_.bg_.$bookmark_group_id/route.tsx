"use client"
import { useLoaderData } from "@remix-run/react";
import { type MetaFunction, type LoaderFunction } from "@remix-run/node";

import { getBookmarkGroupById, getBookmarksByBookmarkGroupId } from "~/services/Bookmark.server";
import { Bookmark } from "~/models";

import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { space } from "postcss/lib/list";

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
    spaceId: spaceId,
    bookmarkGroupId: bookmarkGroupId,
  };
}


export default function bookmarks() {
  const { title, bookmarks, spaceId, bookmarkGroupId }= useLoaderData<{title: string, bookmarks: Bookmark[], spaceId: string, bookmarkGroupId: string}>();

  return (
    <div className="m-16 flex gap-2 flex-col">
      <DataTable columns={columns} data={bookmarks} spaceId={spaceId} bookmarkGroupId={bookmarkGroupId}/>
    </div>
  );
}


