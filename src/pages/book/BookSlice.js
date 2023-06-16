import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BookList: [],
  SelectedBook: {},
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBookList: (state, { payload }) => {
      state.BookList = payload;
    },
    setSelectedBook: (state, { payload }) => {
      state.SelectedBook = payload;
    },
  },
});

const { reducer, actions } = BookSlice;

export const { setBookList, setSelectedBook } = actions;

export default reducer;
