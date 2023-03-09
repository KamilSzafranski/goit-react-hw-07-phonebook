import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getStorage } from "utils/utils";
import { addContacts, deleteContacts, fetchContacts } from "./phoneBook.thunk";

const phoneBookInitialState = {
  isLoading: false,
  error: null,
  contacts: [],
};

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContacts.rejected]: handleError,
    [fetchContacts.rejected]: handleError,
    [addContacts.rejected]: handleError,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      const itemToDelete = state.contacts.findIndex(
        element => element.id === action.payload.id
      );
      state.contacts.splice(itemToDelete, 1);
    },
    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
