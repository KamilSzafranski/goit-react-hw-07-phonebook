import React from "react";
import { Box, Avatar } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

export const ContactsListTitle = props => {
  return (
    <Box
      display="grid"
      h="50px"
      gridTemplateColumns="repeat(3, 1fr)"
      justifyItems="start"
      alignItems="center"
      position="sticky"
      top="10px"
    >
      <Avatar src="https://bit.ly/broken-link" size="xs" />
      <PhoneIcon />
      <EmailIcon />
    </Box>
  );
};
