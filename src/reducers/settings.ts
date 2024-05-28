import { createSlice } from "@reduxjs/toolkit";

interface ProgressState {
  keyTestMode: boolean;
}

const initialState: ProgressState = {
  keyTestMode: false,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setKeyTestMode: (state, action) => {
      state.keyTestMode = action.payload;
    },
  },
});

export const { setKeyTestMode } = progressSlice.actions;

export default progressSlice.reducer;
