import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressState {
  keys: string;
  letters: string;
  caseTop: string;
  caseBottom: string;
}

interface SetColorPayload {
  target: keyof ProgressState;
  color: string;
}

const initialState: ProgressState = {
  keys: "#fff",
  letters: "#fff",
  caseTop: "#fff",
  caseBottom: "#fff",
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<SetColorPayload>) => {
      const { target, color } = action.payload;
      state[target] = color;
    },
  },
});

export const { setColor } = progressSlice.actions;

export default progressSlice.reducer;
