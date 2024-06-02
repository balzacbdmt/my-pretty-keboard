import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CustomElement = {
  id: string;
  color: string;
};

interface ColorsState {
  keys: string;
  letters: string;
  caseTop: string;
  caseBottom: string;
  customElements: CustomElement[];
}

export type ColorName = "keys" | "letters" | "caseTop" | "caseBottom";

interface SetColorsPayload {
  target: ColorName;
  color: string;
}

const initialState: ColorsState = {
  keys: "#fff",
  letters: "#000",
  caseTop: "#999",
  caseBottom: "#fff",
  customElements: [],
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<SetColorsPayload>) => {
      const { target, color } = action.payload;
      state[target] = color;
    },
    addCustomElement: (state, action: PayloadAction<CustomElement>) => {
      state.customElements = [
        ...state.customElements.filter((ce) => ce.id !== action.payload.id),
        action.payload,
      ];
    },
  },
});

export const { setColor, addCustomElement } = colorsSlice.actions;

export default colorsSlice.reducer;
