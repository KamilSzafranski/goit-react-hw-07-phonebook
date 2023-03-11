import React, { useEffect } from "react";
import { Sheet } from "./Sheet/Sheet";
import { Contacts } from "./Contacts/Contacts";

import { useDispatch, useSelector } from "react-redux";
import { selectError } from "redux/selector";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";
import { ErrorAlert } from "./ErrorAlert/ErrorAlert";
import { Box, useDisclosure, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { AddContactModal } from "./Sheet/AddContactModal";
import { ModalStatus } from "redux/constant";
import { openModal } from "redux/phoneBook/phoneBook.slice";

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    if (error !== null) {
      dispatch(openModal(ModalStatus.ERROR_ALERT));
    }
  }, [error]);

  const handleModalAdd = () => {
    dispatch(openModal(ModalStatus.ADD_CONTACT));
  };

  return (
    <>
      <ErrorAlert onClose={onClose} isOpen={isOpen} />
      <AddContactModal />
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
      </Box>
    </>
  );
};
