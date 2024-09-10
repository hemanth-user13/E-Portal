import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;

export default userSlice.reducer;
