import { createSlice } from "@reduxjs/toolkit";

interface ProgressState {
  luminosity: number;
  keyTestMode: boolean;
}

const initialState: ProgressState = {
  luminosity: 2,
  keyTestMode: false,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setKeyTestMode: (state, action) => {
      state.keyTestMode = action.payload;
    },
    setLuminosity: (state, action) => {
      state.luminosity = action.payload;
    }
  },
});

export const { setKeyTestMode, setLuminosity } = progressSlice.actions;

export default progressSlice.reducer;
