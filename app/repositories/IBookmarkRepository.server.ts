import type { Bookmark, BookmarkInput } from '~/models/Bookmark';
import type { BookmarkGroup, BookmarkGroupInput } from '~/models/BookmarkGroup';

export interface IBookmarkRepository {
  getBookmarkGroups(spaceId: string): Promise<BookmarkGroup[] | null>;
  getBookmarkGroupById(id: string): Promise<BookmarkGroup | null>;
  createBookmarkGroup(bookmarkGroup: BookmarkGroupInput): Promise<BookmarkGroup>;

  createBookmark(bookmark: BookmarkInput): Promise<Bookmark | null>;
  getBookmarks(bookmarkGroupId: string): Promise<Bookmark[] | null>;
  getBookamrkById(id: string): Promise<Bookmark | null>;
}
