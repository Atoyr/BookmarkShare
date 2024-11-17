import { createClient } from '~/utils/supabase/server';
import { IBookmarkRepository } from './IBookmarkRepository.server';
import { BookmarkRepository } from './BookmarkRepository.server';

export class BookmarkRepositoryFactory {
  // ProfileRepository を生成するファクトリーメソッド
  public static createBookmarkRepository(request: Request): IBookmarkRepository {

    // TODO: mock
    
    const { client : supabase }  = createClient(request);
    return new BookmarkRepository(supabase!);
  }
}
