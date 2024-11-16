import { Model } from './Model';

export interface ProfileInput extends Model {
  username: string;
  email: string;
  user_id: string;
  avatar_url?: string;
}
export interface Profile extends ProfileInput {
  id: number;
}

