import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/user/userSlice";
const Store = configureStore({
  reducer: {
    adminInfo: adminReducer,
  },
});

export default Store;
