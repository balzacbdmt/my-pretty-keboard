import { configureStore } from "@reduxjs/toolkit";
import colors from "./colors.ts";

const store = configureStore({
  reducer: {
    colors,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;