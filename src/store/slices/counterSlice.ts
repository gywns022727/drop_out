import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  value: number;
}

const initialState: CommonState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    PLUS_ONE: (state) => {
      state.value += 1;
    },
    MINUS_ONE: (state) => {
      state.value -= 1;
    },
    PLUS_AMOUNT: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { PLUS_ONE, MINUS_ONE, PLUS_AMOUNT } = counterSlice.actions;

export default counterSlice.reducer;
