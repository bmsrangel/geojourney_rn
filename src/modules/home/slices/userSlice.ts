import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../../shared/types/user';

const initialUserState = {
  user: {} as User,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<{user: User}>) {
      state.user = action.payload.user;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
