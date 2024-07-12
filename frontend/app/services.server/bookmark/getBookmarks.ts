import type { bookmark } from './service';

export async function getBookmarks<TBase extends new (...args: any[]) => {}>(Base: TBase){
  return class extends Base {
    async getBookmarks() {
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
  }
}
