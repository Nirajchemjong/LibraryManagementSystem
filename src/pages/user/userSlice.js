import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setAdmin } = actions;

export default reducer;
