import {User} from '@types';

export interface AuthState {
  user: User | null;
}

export const state: AuthState = {
  user: null,
};
