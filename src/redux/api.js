import {
  fetchContactsRequest,
  fetchContactsSuccses,
  fetchContactsError,
  addContactRequest,
  addContactSuccses,
  addContactError,
  deleteContactRequest,
  deleteContactSuccses,
  deleteContactError,
} from './actions';

const BASE_URL = 'https://618cf10cedab980017fd50db.mockapi.io';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    const contacts = await response.json();
    dispatch(fetchContactsSuccses(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const deleteContact = idContact => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await fetch(`${BASE_URL}/contacts/${idContact}`, {
      method: 'DELETE',
    });
    dispatch(deleteContactSuccses(idContact));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export const addContact = text => async dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify(text),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  dispatch(addContactRequest());

  try {
    const response = await fetch(BASE_URL + `/contacts`, options);
    const contact = await response.json();
    dispatch(addContactSuccses(contact));
  } catch (error) {
    dispatch(addContactError(error));
  }
};
