import { Model } from './Model';

export interface BookmarkGroupInput{
  space_id: number;
  name: string;
}

export interface BookmarkGroup extends BookmarkGroupInput, Model {
  created_at: Date;
}

