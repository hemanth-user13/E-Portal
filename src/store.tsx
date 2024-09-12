import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./Components/Home/Categories/Posts/PostSlice";

export const store = configureStore({
  reducer: {
    posts:PostSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
