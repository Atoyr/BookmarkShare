"use client"

 import { SquareArrowOutUpRight } from 'lucide-react';
import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "~/components/ui/button";

import { Bookmark } from "~/models"
 

export const columns: ColumnDef<Bookmark>[] = [
  {
    accessorKey: "title", 
    header: () => <div>タイトル</div>,
    cell: ({row}) => {
      const title = row.original.title;
      const url = row.original.url;

      return (
        <div className="flex mx-2 my-2 items-center gap-2">
          <div className="flex-1 h-6">{title}</div>
          <div className="flex-none hidden group-hover:inline-block"><Button className='h-6' variant="outline">開く</Button></div>
          <div className="flex-none hidden group-hover:inline-block"><a href={url}><SquareArrowOutUpRight className='size-4'/></a></div>
        </div>
      );
    }
  }, 
  {
    accessorKey: "tags", 
    header: () => <div></div>,
  }, 
  {
    accessorKey: "created_user", 
    header: () => <div></div>,
  }
];
