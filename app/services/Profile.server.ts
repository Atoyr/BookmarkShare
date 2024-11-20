import { ProfilesRepositoryFactory } from '~/repositories/ProfilesRepositoryFactory.server';
import { Profile } from '~/models/Profile';

export async function getProfileByUserId(
  request: Request, 
  userId: string,
): Promise<Profile | null> {
  const profilesRepo = ProfilesRepositoryFactory.createProfileRepository(request);
  return await profilesRepo.getProfileById(userId);
}

