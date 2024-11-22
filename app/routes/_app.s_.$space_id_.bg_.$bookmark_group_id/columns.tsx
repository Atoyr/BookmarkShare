"use client"

 import { SquareArrowOutUpRight } from 'lucide-react';
import type { ColumnDef } from "@tanstack/react-table"

import { Bookmark } from "~/models"
 

export const columns: ColumnDef<Bookmark>[] = [
  {
    accessorKey: "title", 
    header: () => <div>タイトル</div>,
    cell: ({row}) => {
      const title = row.original.title;
      const url = row.original.url;

      return (
        <div className="flex">
          <div className="flex-1">{title}</div>
          <div className="flex-none"><a href={url}><SquareArrowOutUpRight className='size-4'/></a></div>
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
