import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PrivacyState {
  name: string;
  phone: string;
}

const initialState: PrivacyState = {
  name: "",
  phone: "",
};

const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    NAME: (state, actions: PayloadAction<string>) => {
      state.name = actions.payload;
    },
    PHONE: (state, actions: PayloadAction<string>) => {
      state.phone = actions.payload;
    },
  },
});

export const { NAME, PHONE } = privacySlice.actions;

export default privacySlice.reducer;

export type { PrivacyState };
