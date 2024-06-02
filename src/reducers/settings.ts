import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  luminosity: number;
  keyTestMode: boolean;
  pencilMode: boolean;
  pencilColor: string;
}

const initialState: SettingsState = {
  luminosity: 2,
  keyTestMode: false,
  pencilMode: false,
  pencilColor: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setKeyTestMode: (state, action) => {
      state.keyTestMode = action.payload;
    },
    setLuminosity: (state, action) => {
      state.luminosity = action.payload;
    },
    setPencilMode: (state, action) => {
      state.pencilMode = action.payload;
    },
    setPencilColor: (state, action) => {
      state.pencilColor = action.payload;
    }
  },
});

export const { setKeyTestMode, setLuminosity, setPencilMode, setPencilColor } = settingsSlice.actions;

export default settingsSlice.reducer;
