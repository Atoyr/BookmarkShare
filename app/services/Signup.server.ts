import { createClient } from '~/utils/supabase/server';
import { ProfilesRepository } from '~/repositories/ProfilesRepository.server';
import { SpaceRepository } from '~/repositories/SpaceRepository.server';
import { SpaceRole } from '~/models/SpaceRole';

export async function Signup(
  request: Request, 
  userId: string,
  displayName: string,
  email: string | null = null
) {
  const { client: supabase }  = createClient(request);
  const profilesRepo = new ProfilesRepository(supabase);
  profilesRepo.createProfile({username: displayName, email: email ?? "", user_id: userId});

  const spaceRepo = new SpaceRepository(supabase);

  const space = await spaceRepo.createSpace({name: displayName, is_private: true});
  await spaceRepo.addMember({space_id: space.id, user_id: userId, role: SpaceRole.owner});
}
