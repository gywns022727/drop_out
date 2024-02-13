import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommonState {
  school: String;
  number: String;
}

const initialState: CommonState = {
  school: "",
  number: "",
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    SCHOOL: (state, actions: PayloadAction<String>) => {
      state.school = actions.payload;
    },
    NUMBER: (state, actions: PayloadAction<String>) => {
      state.number = actions.payload;
    },
  },
});

export const { SCHOOL, NUMBER } = schoolSlice.actions;

export default schoolSlice.reducer;

export type { CommonState };
