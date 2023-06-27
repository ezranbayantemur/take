import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {state} from './state';
import {User} from '@types';

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    setUser: (authState, action: PayloadAction<User>) => {
      authState.user = action.payload;
    },
  },
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
