"use client"
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { type MetaFunction, type LoaderFunction } from "@remix-run/node";

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Plus } from "lucide-react"

import { getBookmarkGroupById, getBookmarksByBookmarkGroupId } from "~/services/Bookmark.server";
import { Bookmark } from "~/models";

import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { NewDialog } from "./NewDialog"

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
  const [filterValue, setFilterValue] = useState("");  

  const filteredData = bookmarks.filter((row) =>
    row.title.toLowerCase().includes(filterValue.toLowerCase())
  );
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
  }

  return (
    <div className="m-16 flex gap-2 flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="flex-1">
            <Input
              placeholder="Filter title..."
              value={filterValue}
              onChange={handleFilterChange}
              className="max-w-sm"
            />
          </div>
          <div className="flex-none"><NewDialog spaceId={spaceId} bookmarkGroupId={bookmarkGroupId}/></div>
        </div>
        <DataTable columns={columns} data={filteredData} spaceId={spaceId} bookmarkGroupId={bookmarkGroupId}/>
      </div>
    </div>
  );
}


