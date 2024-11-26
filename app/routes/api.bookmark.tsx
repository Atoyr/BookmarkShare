import { ActionFunction, json } from "@remix-run/node";
import { createBookmark } from "~/services/Bookmark.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "POST":
      return postFn(request);
    case "PUT":
      return putFn(request);
    case "DELETE":
      return deleteFn(request);
    default:
      return null;
  }
};

async function putFn(request: Request) {
  try {
    const data = await request.json();
    const { url, title, space_id, bookmark_group_id  } = data;

    // サーバー側でバリデーションを実行
    if (!url || !title || !space_id || !bookmark_group_id ){
      return json({ error: "Url, title, space_id and bookmark_group_id are required" }, { status: 400 });
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
}


function postFn(request: Request) {
  return json({ error: "Something went wrong" }, { status: 500 });
}

function deleteFn(request: Request) {
  return json({ error: "Something went wrong" }, { status: 500 });
}
