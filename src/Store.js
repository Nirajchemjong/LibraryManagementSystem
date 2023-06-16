import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/user/userSlice";
import bookReducer from "./pages/book/BookSlice";
import burrowHistoryReducer from "./pages/burrow-history/BurrowSlice";
const Store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    bookInfo: bookReducer,
    burrowHistories: burrowHistoryReducer,
  },
});

export default Store;
