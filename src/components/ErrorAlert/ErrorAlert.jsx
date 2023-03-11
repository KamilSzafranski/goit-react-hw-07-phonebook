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
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectModal } from "redux/selector";
import PropTypes from "prop-types";
import { ModalStatus } from "redux/constant";
import { closeModalAction } from "redux/phoneBook/phoneBook.slice";

export const ErrorAlert = props => {
  const cancelRef = useRef();
  const errorType = useSelector(selectError);
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const handleRefresh = () => document.location.reload();

  const handleCloseModal = () => dispatch(closeModalAction());

  return (
    <AlertDialog
      isOpen={modal === ModalStatus.ERROR_ALERT}
      leastDestructiveRef={cancelRef}
      onClose={handleCloseModal}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Oops!!!
          </AlertDialogHeader>

          <AlertDialogBody>ErroCode: {`${errorType}`}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleRefresh}>
              Refresh Page
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

ErrorAlert.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
