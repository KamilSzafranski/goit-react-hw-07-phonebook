import React, { useEffect } from "react";
import { Contacts } from "./Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "redux/selector";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";
import { ErrorAlert } from "./ErrorAlert/ErrorAlert";
import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { AddContactModal } from "./AddContactModal/AddContactModal";
import { ModalStatus } from "redux/constant";
import { openModalAction } from "redux/phoneBook/phoneBook.slice";
import { DeleteAlert } from "./DeleteAlert/DeleteAlert";

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      dispatch(openModalAction(ModalStatus.ERROR_ALERT));
    }
  }, [error, dispatch]);

  const handleModalAdd = () => {
    dispatch(openModalAction(ModalStatus.ADD_CONTACT));
  };

  return (
    <>
      <Box maxW="80%" m="0 auto" position="relative">
        <Button
          colorScheme="teal"
          size="lg"
          rightIcon={<AddIcon />}
          pos="absolute"
          top="20px"
          right="20px"
          onClick={handleModalAdd}
        >
          Add Contact
        </Button>
        <Contacts />
        <DeleteAlert />
        <ErrorAlert />
        <AddContactModal />
      </Box>
    </>
  );
};
