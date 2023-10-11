import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // userName: null,
  // userEmail: null,
  user: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // state.userName = action.payload;
      // state.userEmail = action.payload;
      state.user = action.payload;
    },
    logout: (state) => {
      /* state.userName = null;
      state.userEmail = null; */
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
// export const selectUserName = (state) => state.user.userName;
// export const selectUserEmail = (state) => state.user.userEmail;
export default userSlice.reducer;
