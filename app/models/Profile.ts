import { Model } from './Model';

export interface ProfileInput{
  username: string;
  email: string;
  user_id: string;
  avatar_url?: string;
}

export interface Profile extends ProfileInput, Model {
  created_at: Date;
}

