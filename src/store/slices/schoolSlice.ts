import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommonState {
  nameValue: String;
  numberValue: String;
}

const initialState: CommonState = {
  nameValue: "",
  numberValue: "",
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    SCHOOL_NAME: (state, actions: PayloadAction<String>) => {
      state.nameValue = actions.payload;
    },
    SCHOOL_NUMBER: (state, actions: PayloadAction<String>) => {
      state.numberValue = actions.payload;
    },
  },
});

export const { SCHOOL_NAME, SCHOOL_NUMBER } = schoolSlice.actions;

export default schoolSlice.reducer;
