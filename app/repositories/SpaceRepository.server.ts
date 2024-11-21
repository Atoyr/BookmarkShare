import type { SupabaseClient } from '@supabase/supabase-js';

import { ISpaceRepository } from './ISpaceRepository.server';
import type { 
  BookmarkGroup,
  Space, 
  SpaceInput, 
  SpaceMember, 
  SpaceMemberInput } from '~/models';
import type { Database } from '~/utils/supabase/schema';

export class SpaceRepository implements ISpaceRepository {
  private supabase: SupabaseClient<Database, "public", Database["public"]>

  constructor(supabaseClient: SupabaseClient) {
    this.supabase = supabaseClient;
  }

  async createSpace(space: SpaceInput): Promise<Space> {
    const { data, error } = await this.supabase
      .from('spaces')
      .upsert(space)
      .select();

    if (error) {
      console.error('スペースの作成エラー:', error);
      throw new Error(`スペースの作成エラー: ${error.message}`);
    }

    return data[0] as Space;
  }

  async getSpaceById(id: string): Promise<Space | null>{
    const { data, error } = await this.supabase
      .from('spaces')
      .select('*')
      .eq('id', id);

    if (error) {
      console.error('スペースの取得エラー:', error);
      return null;
    }

    return data[0] as Space;
  }

  async getSpaces(): Promise<Space[] | null>{
    const{ data, error } = await this.supabase
    .from('spaces')
    .select('*')

    if (error) {
      console.error('プロフィールの取得エラー:', error);
      return null;
    }

    return data as Space[];
  }

  async addMember(spaceMember: SpaceMemberInput): Promise<SpaceMember>{
    const { data, error } = await this.supabase
      .from('space_members')
      .upsert(spaceMember)
      .select();

    if (error) {
      console.error('スペースメンバーの作成エラー:', error);
      throw new Error(`スペースメンバーの作成エラー: ${error.message}`);
    }

    return data[0] as SpaceMember;
  }

  async getSpaceMembers(spaceId: string): Promise<SpaceMember[] | null>{
    const{ data, error } = await this.supabase
    .from('space_members')
    .select('*')
    .eq('space_id', spaceId)

    if (error) {
      console.error('プロフィールの取得エラー:', error);
      return null;
    }

    return data as SpaceMember[];
  }

  async getSpacesAndBookmarkGroups(): Promise<Space[] | null> {
    const{ data, error } = await this.supabase
    .from('spaces')
    .select('id, name, is_private, created_at, version, bookmark_groups(*)')

    if (error) {
      console.error('プロフィールの取得エラー:', error);
      return null;
    }

    return data as Space[];
  }
}
