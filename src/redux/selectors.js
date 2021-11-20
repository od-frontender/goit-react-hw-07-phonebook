export const getContactsList = state => state.contacts.items;

export const getFilteredContacts = state => {
  const normalizedFilter = state.contacts.filter.toLocaleLowerCase();

  return state.contacts.items.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};
export const getInputValueFilter = state => state.contacts.filter;
