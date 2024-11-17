import type { Space, SpaceInput } from '~/models/Space';
import type { SpaceMember, SpaceMemberInput } from '~/models/SpaceMember';

export interface ISpaceRepository {
  createSpace(space: SpaceInput): Promise<Space>;
  getSpaceById(id: string): Promise<Space | null>;
  getSpaces(): Promise<Space[] | null>;
  addMember(spaceMember: SpaceMemberInput): Promise<SpaceMember>;
  getSpaceMembers(spaceId: string): Promise<SpaceMember[] | null>;
}

