// repositories/ProfilesRepository.ts
import type { Profile, ProfileInput } from '~/models/Profile';
import type { IProfilesRepository } from './IProfilesRepository.server';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '~/utils/supabase/schema';

export class ProfilesRepository implements IProfilesRepository {
  private supabase: SupabaseClient<Database, "public", Database["public"]>

  constructor(supabaseClient: SupabaseClient) {
    this.supabase = supabaseClient;
  }

  async getProfileById(userId: string): Promise<Profile | null> {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('id, username, email, user_id, avatar_url, version')
      .eq('user_id', userId)
      .limit(1)
      .single();

    if (error) {
      console.error('プロフィールの取得エラー:', error);
      return null;
    }

    return data as Profile;
  }

  async createProfile(profile: ProfileInput): Promise<Profile> {
    const { data, error } = await this.supabase
      .from('profiles')
      .upsert(profile)
      .select();

    if (error) {
      console.error('プロフィールの作成エラー:', error);
      throw new Error(`プロフィールの作成エラー: ${error.message}`);
    }

    return data[0] as Profile;
  }

  async updateProfile(id: string, profile: ProfileInput): Promise<Profile> {
    const { data, error } = await this.supabase
      .from('profiles')
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
      .from('profiles')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`プロフィールの削除エラー: ${error.message}`);
    }
  }
}

