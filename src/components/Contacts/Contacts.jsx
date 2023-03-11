import React from "react";

import { useDispatch } from "react-redux";
import { addFilterAction } from "redux/filters/filters.slice";
import { Box, Heading, Text, Input } from "@chakra-ui/react";
import { ContactsList } from "components/ContactsList/ContactsList";

export const Contacts = props => {
  const dispatch = useDispatch();

  const handleInput = event => {
    const {
      target: { value },
    } = event;
    dispatch(addFilterAction(value));
  };

  return (
    <Box boxShadow="base" p="10px" rounded="md">
      <Heading as="h2" mb="5px">
        PhoneBook
      </Heading>
      <Text fontSize="md" fontWeight="700" mb="10px">
        Find contacts by name
      </Text>
      <Input
        focusBorderColor="#38B2AC"
        type="text"
        name="filter"
        onChange={handleInput}
        size="md"
        width="250px"
      />
      <ContactsList />
      <Text fontSize="xs" pt="10px">
        * to delete item just click on it
      </Text>
    </Box>
  );
};
