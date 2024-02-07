import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  name: string[];
}

const initialState: userState = {
  name: ["Kim", "Lee", "Park"],
};

const manageSlicer = createSlice({
  name: "manage",
  initialState,
  reducers: {
    ADD_NAME: (state, action: PayloadAction<string>) => {
      state.name.push(action.payload);
    },
    DELETE_NAME: (state, action: PayloadAction<string>) => {
      const newName = state.name.filter((name) => name !== action.payload);
      state.name = newName;
    },
  },
});

export const { ADD_NAME, DELETE_NAME } = manageSlicer.actions;
export default manageSlicer.reducer;
