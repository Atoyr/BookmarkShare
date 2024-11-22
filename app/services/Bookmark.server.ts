import { BookmarkRepositoryFactory } from '~/repositories/BookmarkRepositoryFactory.server';
import { BookmarkGroup, Bookmark, BookmarkInput } from '~/models';


export async function getBookmarkGroupById(
  request: Request, 
  bookmarkGroupId: string,
): Promise<BookmarkGroup | null> {
  const bookmarkRepo = BookmarkRepositoryFactory.createBookmarkRepository(request);
  return await bookmarkRepo.getBookmarkGroupById(bookmarkGroupId);
}

export async function getBookmarksByBookmarkGroupId(
  request: Request, 
  bookmarkGroupId: string,
): Promise<Bookmark[] | null> {
  const bookmarkRepo = BookmarkRepositoryFactory.createBookmarkRepository(request);
  return await bookmarkRepo.getBookmarks(bookmarkGroupId);
}

export async function createBookmark(
  request: Request, 
  bookmark: BookmarkInput,
): Promise<Bookmark | null>{
  const bookmarkRepo = BookmarkRepositoryFactory.createBookmarkRepository(request);
  return await bookmarkRepo.createBookmark(bookmark);
}
