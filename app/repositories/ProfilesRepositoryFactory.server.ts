import { createClient } from '~/utils/supabase/server';
import { IProfilesRepository } from './IProfilesRepository.server';
import { ProfilesRepository } from './ProfilesRepository.server';

export class ProfilesRepositoryFactory {
  // ProfileRepository を生成するファクトリーメソッド
  public static createProfileRepository(request: Request): IProfilesRepository {

    // TODO: mock
    
    const { client : supabase }  = createClient(request);
    return new ProfilesRepository(supabase!);
  }
}

