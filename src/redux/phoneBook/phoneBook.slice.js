import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getStorage } from "utils/utils";

const phoneBookInitialState = getStorage("contacts");

const phoneBookSlice = createSlice({
  name: "phoneBook",
  initialState: phoneBookInitialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const index = state.findIndex(element => element.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContactAction, deleteContactAction } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
