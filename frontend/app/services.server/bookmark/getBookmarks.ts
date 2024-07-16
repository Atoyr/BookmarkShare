import type { bookmark } from './bookmark';

export async function getBookmarks() {
  const bookmarks = [{
    title: "My Sample Title", 
    tags: [ "a", "b"], 
    url: "https://example.co.jp", 
      sharedUser: "MY NAME", 
    favalitCount: 0, 
    favalit: false, 
  }, 
  ] as bookmark[];
  console.log("get bookmarks")
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("complete bookmarks")
  return bookmarks;
}
