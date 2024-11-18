import { SupabaseClient } from '@supabase/supabase-js';
import type { IBookmarkRepository } from './IBookmarkRepository.server';
import type { Bookmark, BookmarkInput } from '~/models/Bookmark';
import type { BookmarkGroup, BookmarkGroupInput } from '~/models/BookmarkGroup';
import type { Database } from '~/utils/supabase/schema';

export class BookmarkRepository implements IBookmarkRepository {
  private supabase: SupabaseClient<Database, "public", Database["public"]>

  constructor(supabaseClient: SupabaseClient ) {
    this.supabase = supabaseClient;
  }

  async getBookmarkGroups(spaceId: string): Promise<BookmarkGroup[] | null>{
    const{ data, error } = await this.supabase
    .from('bookmark_groups')
    .select('*')
    .eq('space_id', spaceId)

    if (error) {
      console.error('BookmarkGroupの取得エラー:', error);
      return null;
    }

    return data as BookmarkGroup[];
  }

  async getBookmarkGroupById(id: string): Promise<BookmarkGroup | null> {
    const{ data, error } = await this.supabase
    .from('bookmark_groups')
    .select('*')
    .eq('id', id)

    if (error) {
      console.error('BookmarkGroupの取得エラー:', error);
      return null;
    }

    return data[0] as BookmarkGroup;
  }

  async createBookmarkGroup(bookmarkGroup: BookmarkGroupInput): Promise<BookmarkGroup> {
    console.log(bookmarkGroup);
    const { data, error } = await this.supabase
      .from('bookmark_groups')
      .upsert(bookmarkGroup)
      .select();

    if (error) {
      console.error('BookmarkGroupの作成エラー:', error);
      throw new Error(`BookmarkGroupの作成エラー: ${error.message}`);
    }

    return data[0] as BookmarkGroup;
  }

  async createBookmark(bookmark: BookmarkInput): Promise<Bookmark> {
    const { data, error } = await this.supabase
      .from('bookmarks')
      .upsert(bookmark)
      .select();

    if (error) {
      console.error('Bookmarkの作成エラー:', error);
      throw new Error(`Bookmarkの作成エラー: ${error.message}`);
    }

    return data[0] as Bookmark;
  }

  async getBookmarks(bookmarkGroupId: string): Promise<Bookmark[] | null> {
    const{ data, error } = await this.supabase
    .from('bookmarks')
    .select('*')
    .eq('bookmark_group_id', bookmarkGroupId)

    if (error) {
      console.error('Bookmarkの取得エラー:', error);
      return null;
    }

    return data as Bookmark[];

  }

  async getBookamrkById(id: string): Promise<Bookmark | null> {
    const{ data, error } = await this.supabase
    .from('bookmarks')
    .select('*')
    .eq('id', id)

    if (error) {
      console.error('Bookmarkの取得エラー:', error);
      return null;
    }

    return data[0] as Bookmark;
  }
}


