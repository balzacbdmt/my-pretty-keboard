import { configureStore } from "@reduxjs/toolkit";
import colors from "./colors.ts";
import settings from "./settings.ts";
import localStorageMiddleware from "../middleware/localStorage.ts";

const loadState = (name: string) => {
  try {
    const storedState = localStorage.getItem(name);
    if (storedState === null) {
      return undefined;
    }
    return JSON.parse(storedState);
  } catch (err) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    colors,
    settings,
  },
  preloadedState: {
    colors: loadState("colors"),
    settings: loadState("settings"),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
