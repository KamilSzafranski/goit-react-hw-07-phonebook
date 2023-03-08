export const selectFileredContacts = state => {
  const { phoneBook: contact, filter } = state;
  return contact.filter(element =>
    element.name.toLowerCase().startsWith(filter.toLowerCase())
  );
};
