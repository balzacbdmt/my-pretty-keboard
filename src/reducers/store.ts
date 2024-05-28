import { configureStore } from "@reduxjs/toolkit";
import colors from "./colors.ts";
import settings from "./settings.ts";

const store = configureStore({
  reducer: {
    colors,
    settings,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;