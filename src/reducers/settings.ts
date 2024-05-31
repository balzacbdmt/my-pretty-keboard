import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  luminosity: number;
  keyTestMode: boolean;
}

const initialState: SettingsState = {
  luminosity: 2,
  keyTestMode: false,
};

const settingsSlice = createSlice({
  name: "Settings",
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

export const { setKeyTestMode, setLuminosity } = settingsSlice.actions;

export default settingsSlice.reducer;
