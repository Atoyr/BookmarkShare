import type { 
  BookmarkGroup,
  Space, 
  SpaceInput, 
  SpaceMember, 
  SpaceMemberInput } from '~/models';

export interface ISpaceRepository {
  createSpace(space: SpaceInput): Promise<Space>;
  getSpaceById(id: string): Promise<Space | null>;
  getSpaces(): Promise<Space[] | null>;
  addMember(spaceMember: SpaceMemberInput): Promise<SpaceMember>;
  getSpaceMembers(spaceId: string): Promise<SpaceMember[] | null>;
  getSpacesAndBookmarkGroups(): Promise<Space[] | null>;
}

