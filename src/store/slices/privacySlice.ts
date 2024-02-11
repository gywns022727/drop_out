import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommonState {
  name: String;
  phone: String;
}

const initialState: CommonState = {
  name: "",
  phone: "",
};

const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    NAME: (state, actions: PayloadAction<String>) => {
      state.name = actions.payload;
    },
    PHONE: (state, actions: PayloadAction<String>) => {
      state.phone = actions.payload;
    },
  },
});

export const { NAME, PHONE } = privacySlice.actions;

export default privacySlice.reducer;
