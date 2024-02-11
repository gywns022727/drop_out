import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommonState {
  school: String;
  class: String;
}

const initialState: CommonState = {
  school: "",
  class: "",
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    SCHOOL: (state, actions: PayloadAction<String>) => {
      state.school = actions.payload;
    },
    CLASS: (state, actions: PayloadAction<String>) => {
      state.class = actions.payload;
    },
  },
});

export const { SCHOOL, CLASS } = schoolSlice.actions;

export default schoolSlice.reducer;
