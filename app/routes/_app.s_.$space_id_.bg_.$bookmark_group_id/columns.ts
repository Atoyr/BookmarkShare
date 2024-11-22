"use client"
 
import type { ColumnDef } from "@tanstack/react-table"
import { Bookmark } from "~/models"
 

export const columns: ColumnDef<Bookmark>[] = [
  {
    accessorKey: "title", 
    header: "タイトル", 
  }

];
