export type bookmark = {
    title: string, 
    tags: string[], 
    url: string, 
    sharedUser: string, 
    favalitCount: number, 
    favalit: boolean, 
};

export async function getBookmarks(): Promise<bookmark[]> {
  const bookmarks = [{
    title: "My Sample Title", 
    tags: [ "a", "b"], 
    url: "https://example.co.jp", 
    sharedUser: "MY NAME", 
    favalitCount: 0, 
    favalit: false, 
  }, 
  ] as bookmark[];
  await new Promise(resolve => setTimeout(() => resolve, 2000));
  return bookmarks;
}
