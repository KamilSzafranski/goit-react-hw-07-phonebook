import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.phoneBook.contacts;
export const selectFilters = state => state.filter;
export const selectisLoding = state => state.phoneBook.isLoading;
export const selectError = state => state.phoneBook.error;
export const selectModal = state => state.phoneBook.modal;
export const selectIdToDelete = state => state.phoneBook.idToDelete;

export const selectFileredContacts = createSelector(
  [selectContacts, selectFilters],
  (phoneBook, filters) =>
    phoneBook.filter(element =>
      element.name.toLowerCase().startsWith(filters.toLowerCase())
    )
);
