import React from "react";
import css from "./Contacts.module.css";

import { ContactsItem } from "components/ContactsItem/ContacsItem";
import { useDispatch, useSelector } from "react-redux";
import { addFilterAction } from "redux/filters/filters.slice";
import { selectFileredContacts } from "redux/selector";

export const Contacts = props => {
  const contacts = useSelector(selectFileredContacts);
  const dispatch = useDispatch();

  const handleInput = event => {
    const {
      target: { value },
    } = event;
    dispatch(addFilterAction(value));
  };

  return (
    <div className={css.box}>
      <h2 className={css.title}>Contacts</h2>
      <p className={css.description}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleInput}
        className={css.input}
      />
      <ul>
        {contacts.map(element => {
          return (
            <ContactsItem
              key={element.id}
              name={element.name}
              number={element.number}
              id={element.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
