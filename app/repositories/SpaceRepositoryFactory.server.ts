import { createClient } from '~/utils/supabase/server';
import { ISpaceRepository } from './ISpaceRepository.server';
import { SpaceRepository } from './SpaceRepository.server';

export class SpaceRepositoryFactory {
  // ProfileRepository を生成するファクトリーメソッド
  public static createSpaceRepository(request: Request): ISpaceRepository {

    // TODO: mock
    
    const { client : supabase }  = createClient(request);
    return new SpaceRepository(supabase!);
  }
}


