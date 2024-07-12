
export type bookmark = {
    title: string, 
    tags: string[], 
    url: string, 
    sharedUser: string, 
    favalitCount: number, 
    favalit: boolean, 
};

export interface IBookmarkService {
  getBookmarks(): Promise<bookmark[]>;
  setBookmarks(): void;
}


export class BookmarkServiceBase {
  constructor(public name: string) {}
}


