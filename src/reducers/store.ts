import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "../middleware/localStorage.ts";
import colors from "./colors.ts";
import settings from "./settings.ts";
import notifications from "./notifications.ts";

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
    notifications,
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
