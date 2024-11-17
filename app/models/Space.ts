import { Model } from './Model';

export interface SpaceInput{
  name: string;
  is_private: boolean;
}

export interface Space extends SpaceInput, Model {
  created_at: Date;
}
