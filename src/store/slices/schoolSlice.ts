import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SchoolState {
  school: string;
  number: string;
}

const initialState: SchoolState = {
  school: "",
  number: "",
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    SCHOOL: (state, actions: PayloadAction<string>) => {
      state.school = actions.payload;
    },
    NUMBER: (state, actions: PayloadAction<string>) => {
      state.number = actions.payload;
    },
  },
});

export const { SCHOOL, NUMBER } = schoolSlice.actions;

export default schoolSlice.reducer;

export type { SchoolState };
