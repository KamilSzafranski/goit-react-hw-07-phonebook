import React from "react";

import PropTypes from "prop-types";

import { ListItem, Divider, Text, useDisclosure } from "@chakra-ui/react";
import { DeleteAlert } from "components/DeleteAlert/DeleteAlert";
import { useDispatch } from "react-redux";

export const ContactsItem = ({ name, number, id, email }) => {
  const handleDelete = event => {
    onOpen();
    event.preventDefault();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <DeleteAlert ids={id} handleOpen={isOpen} handleClose={onClose} />
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
