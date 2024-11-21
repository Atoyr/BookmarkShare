import { Model } from './Model';
import { BookmarkGroup } from './BookmarkGroup';

export interface SpaceInput{
  name: string;
  is_private: boolean;
}

export interface Space extends SpaceInput, Model {
  created_at: string;
  bookmark_groups?: BookmarkGroup[];
}
