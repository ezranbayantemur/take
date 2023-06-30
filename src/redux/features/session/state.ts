import type {User} from '@types';

export interface AuthState {
  userSession: User | null;
  sessionPending: boolean;
}

export const state: AuthState = {
  userSession: null,
  sessionPending: true,
};
