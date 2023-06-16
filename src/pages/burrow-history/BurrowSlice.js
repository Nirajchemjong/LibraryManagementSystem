import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  burrowHistoryList: [],
};
const burrowHistorySlice = createSlice({
  name: "burrowHistory",
  initialState,
  reducers: {
    setBurrowHistory: (state, { payload }) => {
      state.burrowHistoryList = payload;
    },
  },
});

const { reducer, actions } = burrowHistorySlice;

export const { setBurrowHistory } = actions;

export default reducer;
