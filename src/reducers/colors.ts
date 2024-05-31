import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorsState {
  keys: string;
  letters: string;
  caseTop: string;
  caseBottom: string;
}

interface SetColorPayload {
  target: keyof ColorsState;
  color: string;
}

const initialState: ColorsState = {
  keys: "#fff",
  letters: "#000",
  caseTop: "#999",
  caseBottom: "#fff",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<SetColorPayload>) => {
      const { target, color } = action.payload;
      state[target] = color;
    },
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
