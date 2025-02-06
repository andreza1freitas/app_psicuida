import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userId: null,
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.userName = '';
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { login, logout, updateUserName } = userSlice.actions;

export default userSlice.reducer;
