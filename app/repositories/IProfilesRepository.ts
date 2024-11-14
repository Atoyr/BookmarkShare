import { Profile, ProfileInput } from '~/models/Profile';

export interface IProfilesRepository {
  getProfileById(id: string): Promise<Profile | null>;
  createProfile(profile: ProfileInput): Promise<Profile>;
  updateProfile(id: string, profile: ProfileInput): Promise<Profile>;
  deleteProfile(id: string): Promise<void>;
}
