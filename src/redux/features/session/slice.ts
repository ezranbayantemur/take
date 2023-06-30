import {createSlice} from '@reduxjs/toolkit';
import {state} from './state';
import controlSession from './thunk/controlSession';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {User} from '@types';

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    setUserSession: (authState, action: PayloadAction<User>) => {
      authState.userSession = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(controlSession.pending, _state => {
      state.sessionPending = true;
    });
    builder.addCase(controlSession.fulfilled, (_state, action) => {
      state.sessionPending = false;
      state.userSession = action.payload;
    });
    builder.addCase(controlSession.rejected, _state => {
      state.sessionPending = false;
      state.userSession = null;
    });
  },
});

export const {setUserSession} = authSlice.actions;

export default authSlice.reducer;
