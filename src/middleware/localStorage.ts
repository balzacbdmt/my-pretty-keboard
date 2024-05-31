import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../reducers/store";

// TODO type action and middleware
/**
 * This middleware store all slicer values by name in the local storage
 */
const localStorageMiddleware: Middleware =
  (store) => (next) => (action: any) => {
    const result = next(action);
    const state: RootState = store.getState();
    const [sliceName]: keyof RootState = action.type.split("/");
    if (sliceName in state) {
        localStorage.setItem(sliceName, JSON.stringify(state[sliceName as keyof RootState]));
    }
    return result;
  };

export default localStorageMiddleware;
