import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";

import { useRef } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { deleteContacts } from "redux/phoneBook/phoneBook.thunk";

export const DeleteAlert = ({ handleOpen, handleClose, ids }) => {
  const cancelRef = useRef();
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(ids));

  return (
    <AlertDialog
      isOpen={handleOpen}
      leastDestructiveRef={cancelRef}
      onClose={handleClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

DeleteAlert.prototypes = {
  handleOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  ids: PropTypes.string,
};
