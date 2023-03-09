import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilterAction(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { addFilterAction } = filtersSlice.actions;
