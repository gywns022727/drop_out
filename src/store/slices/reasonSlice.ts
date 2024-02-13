import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ReasonState {
  reason: string;
}

const initialState: ReasonState = {
  reason: "",
};

const reasonSlice = createSlice({
  name: "reason",
  initialState,
  reducers: {
    REASON: (state, actions: PayloadAction<string>) => {
      state.reason = actions.payload;
    },
  },
});

export const { REASON } = reasonSlice.actions;

export default reasonSlice.reducer;

export type { ReasonState };
