import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ModalStatus } from "redux/constant";
import { getStorage } from "utils/utils";
import { addContacts, deleteContacts, fetchContacts } from "./phoneBook.thunk";
import { useDisclosure } from "@chakra-ui/react";

const phoneBookInitialState = {
  isLoading: false,
  error: null,
  contacts: [],
  modal: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const phoneBookSlice = createSlice({
  name: "phoneBook",
  initialState: phoneBookInitialState,
  reducers: {
    closeModal(state, action) {
      state.modal = null;
    },
    openModal(state, action) {
      state.modal = action.payload;
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
      state.isLoading = false;
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

export const { closeModal, openModal } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
