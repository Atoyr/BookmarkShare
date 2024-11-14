// repositories/ProfilesRepository.ts
import type { Profile, ProfileInput } from '~/models/Profile';
import type { IProfilesRepository } from './IProfilesRepository';
import type { SupabaseClient } from '@supabase/supabase-js';

export class ProfilesRepository implements IProfilesRepository {
  private supabase: SupabaseClient;

  constructor(supabaseClient: SupabaseClient) {
    this.supabase = supabaseClient;
  }

  async getProfileById(id: string): Promise<Profile | null> {
    const { data, error } = await this.supabase
      .from('Profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('プロフィールの取得エラー:', error);
      return null;
    }

    ///return data as Profile;
    return null;
  }

  async createProfile(profile: ProfileInput): Promise<Profile> {
    const { data, error } = await this.supabase
      .from('Profiles')
      .insert(profile)
      .single();

    if (error) {
      throw new Error(`プロフィールの作成エラー: ${error.message}`);
    }

    return data as Profile;
  }

  async updateProfile(id: string, profile: ProfileInput): Promise<Profile> {
    const { data, error } = await this.supabase
      .from('Profiles')
      .update(profile)
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`プロフィールの更新エラー: ${error.message}`);
    }

    return data as Profile;
  }

  async deleteProfile(id: string): Promise<void> {
    const { error } = await this.supabase
      .from('Profiles')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`プロフィールの削除エラー: ${error.message}`);
    }
  }
}

