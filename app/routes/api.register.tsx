import { ActionFunction, json } from "@remix-run/node";
import { createBookmark } from "~/services/Bookmark.server";

export const action: ActionFunction = async ({ request }) => {
  try {
    const data = await request.json();
    const { url, title, space_id, bookmark_group_id  } = data;

    // サーバー側でバリデーションを実行
    if (!url || !title) {
      return json({ error: "Name and email are required" }, { status: 400 });
    }

    const bookmark = await createBookmark(request, { url, title, space_id, bookmark_group_id });

    if (!bookmark) {
      return json({ error: "Failed to save data" }, { status: 500 });
    }

    return json({ success: true, bookmark });
  } catch (error) {
    console.error(error);
    return json({ error: "Something went wrong" }, { status: 500 });
  }
};

