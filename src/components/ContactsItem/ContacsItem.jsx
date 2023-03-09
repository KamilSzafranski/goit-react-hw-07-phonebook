import React from 'react';
import css from './ContactsItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/phoneBook/phoneBook.thunk';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = event => {
    event.preventDefault();
    dispatch(deleteContacts(id));
    alert(`${name} has been deleted `);
  };

  return (
    <li className={css.item}>
      <span>{name}:</span>
      <span> {number}</span>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
