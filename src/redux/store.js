import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook/phoneBook.slice";
import { filterReducer } from "./filters/filters.slice";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    filter: filterReducer,
  },
});
