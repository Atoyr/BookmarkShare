// models/Profile.ts
export interface Profile {
  id: number;
  username: string;
  email: string;
  user_id: string;
  avatar_url?: string;
}

export interface ProfileInput {
  username: string;
  email: string;
  user_id: string;
  avatar_url?: string;
}
