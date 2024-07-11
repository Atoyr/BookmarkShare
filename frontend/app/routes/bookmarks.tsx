import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"

import { getBookmarks } from "~/services.server/bookmarks";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const bookmarks = await getBookmarks();
  return json({ bookmarks });
};

export default function Bookmarks() {
  const { bookmarks } = useLoaderData<typeof loader>();
  return (
    <div className="font-sans p-4">
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[700px]">Title</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Shared User</TableHead>
          <TableHead></TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Modified At</TableHead>
        </TableRow>
      </TableHeader>
        { bookmarks.length ? (
      <TableBody>
          { bookmarks.map((b: any) => (
            <TableRow>
              <TableCell className="font-medium">{b.title}</TableCell>
              <TableCell><Badge variant="outline">Badge</Badge></TableCell>
              <TableCell>{b.url}</TableCell>
              <TableCell>{b.sharedUser}</TableCell>
              <TableCell>♥ 100</TableCell>
              <TableCell>2024/06/21</TableCell>
              <TableCell>2024/07/01</TableCell>

            </TableRow>
          )) } 
        </TableBody>
        ) : (<TableBody><TableRow /></TableBody>)
        }
    </Table>
    </div>
  );
}


