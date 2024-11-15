// models/Profile.ts
export interface Profile {
  username: string;
  email: string;
  user_id: string;
  avater_url?: string;
}

export interface ProfileInput {
  username: string;
  email: string;
  user_id: string;
  avater_url?: string;
}
