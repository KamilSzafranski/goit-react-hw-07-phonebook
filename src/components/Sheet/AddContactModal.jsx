import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectModal } from "redux/selector";
import { addContacts } from "redux/phoneBook/phoneBook.thunk";
import { ModalStatus } from "redux/constant";
import { closeModal } from "redux/phoneBook/phoneBook.slice";
export const AddContactModal = props => {
  const initialRef = useRef();

  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const modal = useSelector(selectModal);

  const handleCloseModal = () => dispatch(closeModal());

  const handleAdd = event => {
    event.preventDefault();
    console.log(event.currentTarget);

    // const {
    //   name: { value: text },
    //   number: { value: num },
    //   email: { value: mail },
    // } = event.currentTarget.elements;

    // const nameTaken = contact.some(elements => elements.name === text);
    // const numberTaken = contact.some(elements => elements.phone === num);
    // const emailTaken = contact.some(elements => elements.emai === email);
    // if (nameTaken && numberTaken) {
    //   return alert(`${text} is alredy in Phonebook`);
    // }
    // dispatch(addContacts({ text, num }));
  };

  return (
    <Modal
      isOpen={modal === ModalStatus.ADD_CONTACT}
      onClose={handleCloseModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>AddContact</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleAdd} id="formId">
            <FormControl>
              <FormLabel htmlFor="Name">First name</FormLabel>
              <Input
                id="Name"
                ref={initialRef}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <FormLabel htmlFor="number">Phone</FormLabel>
              <Input
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" name="email" required />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit" form="formId">
            Save
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
