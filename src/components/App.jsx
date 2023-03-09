import React, { useEffect } from "react";
import { Sheet } from "./Sheet/Sheet";
import { Contacts } from "./Contacts/Contacts";
import css from "./App.module.css";
import { saveStorage } from "../utils/utils.js";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selector";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";

export const App = () => {
  const contact = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("E");
    dispatch(fetchContacts());
  }, []);

  return (
    <div className={css.container}>
      <Sheet />
      <Contacts />
    </div>
  );
};
