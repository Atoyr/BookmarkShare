// models/Profile.ts
export interface Profile {
  id: string;
  username: string;
  email: string;
}

export interface ProfileInput {
  username: string;
  email: string;
}
