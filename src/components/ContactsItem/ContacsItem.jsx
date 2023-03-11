import React from "react";
import PropTypes from "prop-types";
import { ListItem, Divider, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  openModalAction,
  setIdToDeleteAction,
} from "redux/phoneBook/phoneBook.slice";
import { ModalStatus } from "redux/constant";

export const ContactsItem = ({ name, number, id, email }) => {
  const dispatch = useDispatch();
  const handleDelete = event => {
    event.preventDefault();
    dispatch(setIdToDeleteAction(id));
    dispatch(openModalAction(ModalStatus.DELETE_ALERT));
  };

  return (
    <>
      <ListItem
        display="grid"
        h="50px"
        gridTemplateColumns="repeat(3, 1fr)"
        justifyItems="start"
        alignItems="center"
        cursor="pointer"
        onClick={handleDelete}
      >
        <Text>{name}:</Text>
        <Text> {number}</Text>
        <Text> {email}</Text>
      </ListItem>
      <Divider mb="10px" borderColor="#38B2AC" />
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  email: PropTypes.string,
};
