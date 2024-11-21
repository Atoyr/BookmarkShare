import { ProfilesRepositoryFactory } from '~/repositories/ProfilesRepositoryFactory.server';
import { Profile, Space, BookmarkGroup } from '~/models';

export async function getProfileByUserId(
  request: Request, 
  userId: string,
): Promise<Profile | null> {
  const profilesRepo = ProfilesRepositoryFactory.createProfileRepository(request);
  return await profilesRepo.getProfileById(userId);
}

export async function getProfileAndSpacesByUserId(
  request: Request, 
  userId: string,
): Promise<{ profile: Profile, spaces: Space[], bookmarkGroups: BookmarkGroup[] } | null> {

  return null;
}
