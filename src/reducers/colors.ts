import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorsState {
  keys: string;
  letters: string;
  caseTop: string;
  caseBottom: string;
}

interface SetColorsPayload {
  target: keyof ColorsState;
  color: string;
}

const initialState: ColorsState = {
  keys: "#fff",
  letters: "#000",
  caseTop: "#999",
  caseBottom: "#fff",
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<SetColorsPayload>) => {
      const { target, color } = action.payload;
      state[target] = color;
    },
  },
});

export const { setColor } = colorsSlice.actions;

export default colorsSlice.reducer;
