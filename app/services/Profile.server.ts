import { ProfilesRepositoryFactory } from '~/repositories/ProfilesRepositoryFactory.server';
import { SpaceRepositoryFactory } from '~/repositories/SpaceRepositoryFactory.server';
import { Profile, Space } from '~/models';

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
): Promise<{ profile: Profile | null, spaces: Space[] }> {
  const profilesRepo = ProfilesRepositoryFactory.createProfileRepository(request);
  const spacesRepo = SpaceRepositoryFactory.createSpaceRepository(request);
  const profileProcess = profilesRepo.getProfileById(userId);
  const spacesProcess = spacesRepo.getSpacesAndBookmarkGroups();

  const profile = await profileProcess;
  if (!profile) {
    return { profile: null, spaces: [] };
  }
  const spaces = await spacesProcess;
  return { profile, spaces: spaces ?? [] };
}
