import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DropState {
  drop: boolean;
}

const initialState: DropState = {
  drop: true,
};

const dropSlice = createSlice({
  name: "drop",
  initialState,
  reducers: {
    DROP: (state, actions: PayloadAction<boolean>) => {
      state.drop = actions.payload;
    },
  },
});

export const { DROP } = dropSlice.actions;

export default dropSlice.reducer;

export type { DropState };
