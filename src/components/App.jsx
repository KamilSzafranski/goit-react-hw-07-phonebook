import React, { useEffect } from "react";
import { Sheet } from "./Sheet/Sheet";
import { Contacts } from "./Contacts/Contacts";
import css from "./App.module.css";
import { saveStorage } from "../utils/utils.js";
import { useSelector } from "react-redux";

export const App = () => {
  const contact = useSelector(state => state.phoneBook);

  useEffect(() => {
    if (contact?.length) saveStorage("contacts", contact);
    else saveStorage("contacts", []);
  }, [contact]);

  return (
    <div className={css.container}>
      <Sheet />
      <Contacts />
    </div>
  );
};
