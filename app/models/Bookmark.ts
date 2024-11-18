import { Model } from './Model';

export interface BookmarkInput{
  title: string;
  url: string;
  bookmark_group_id: number;
}

export interface Bookmark extends BookmarkInput, Model {
  create_user_id: string;
  last_update_user_id: string;
  created_at: string;
}
