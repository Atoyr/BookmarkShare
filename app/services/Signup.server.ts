import { ProfilesRepositoryFactory } from '~/repositories/ProfilesRepositoryFactory.server';
import { SpaceRepositoryFactory } from '~/repositories/SpaceRepositoryFactory.server';
import { BookmarkRepositoryFactory } from '~/repositories/BookmarkRepositoryFactory.server';
import { SpaceRole } from '~/models/SpaceRole';

export async function signup(
  request: Request, 
  userId: string,
  displayName: string,
  email: string | null = null
) {
  // TODO: recovery

  // ユーザーのプロフィールを作成
  const profilesRepo = ProfilesRepositoryFactory.createProfileRepository(request);
  profilesRepo.createProfile({username: displayName, email: email ?? "", user_id: userId});

  // プライベートスペースの作成
  const spaceRepo = SpaceRepositoryFactory.createSpaceRepository(request);
  const space = await spaceRepo.createSpace({name: displayName, is_private: true});
  await spaceRepo.addMember({space_id: space.id, user_id: userId, role: SpaceRole.owner});

  // デフォルトのブックマークグループを作成
  const bookmarksRepo = BookmarkRepositoryFactory.createBookmarkRepository(request);
  const bookmakGroup = await bookmarksRepo.createBookmarkGroup({space_id: space.id, name: 'デフォルトグループ'});
}
