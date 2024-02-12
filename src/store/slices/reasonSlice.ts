import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommonState {
  reason: String;
}

const initialState: CommonState = {
  reason: "",
};

const reasonSlice = createSlice({
  name: "reason",
  initialState,
  reducers: {
    REASON: (state, actions: PayloadAction<String>) => {
      state.reason = actions.payload;
    },
  },
});

export const { REASON } = reasonSlice.actions;

export default reasonSlice.reducer;
