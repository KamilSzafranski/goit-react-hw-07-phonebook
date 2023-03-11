import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import { selectFileredContacts, selectisLoding } from "redux/selector";
import { Center, List, Spinner } from "@chakra-ui/react";
import { ContactsItem } from "components/ContactsItem/ContacsItem";
import { ContactsListTitle } from "components/ContactsListTitle/ContactsListTitle";

export const ContactsList = props => {
  const contacts = useSelector(selectFileredContacts);
  const isLoading = useSelector(selectisLoding);
  return (
    <>
      {isLoading && (
        <Center pt="50px">
          <Spinner
            color="#2C7A7B"
            w="150px"
            h="150px"
            thickness="10px"
            speed="1s"
            emptyColor="gray.200"
          />
        </Center>
      )}
      {!isLoading && (
        <>
          <ContactsListTitle />
          <List
            overflowY="scroll"
            maxH="60vh"
            pr="10px"
            sx={{
              " ::-webkit-scrollbar": {
                width: "5px",
                position: "absolute",
              },

              "::-webkit-scrollbar-track": {
                backgroundColor: " #ffffff",
              },

              "::-webkit-scrollbar-thumb": {
                background: "#20caa8",
                borderRadius: "3px",
              },

              "::-webkit-scrollbar-thumb:hover": {
                background: "#2C7A7B",
              },
            }}
          >
            {contacts.map(element => {
              return (
                <ContactsItem
                  key={element.id}
                  name={element.name}
                  number={element.phone}
                  email={element.email}
                  id={element.id}
                />
              );
            })}
          </List>
        </>
      )}
    </>
  );
};
