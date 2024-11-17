import { Model } from './Model';
import { SpaceRole } from './SpaceRole';

export interface SpaceMemberInput{
  space_id: number;
  user_id: string;
  role: SpaceRole;
}

export interface SpaceMember extends SpaceMemberInput, Model {
  created_at: Date;
}

