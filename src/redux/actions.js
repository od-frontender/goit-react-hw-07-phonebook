import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccses = createAction(
  'contacts/fetchContactsSuccses',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccses = createAction(
  'contacts/deleteContactSuccses',
);
export const deleteContactError = createAction('contacts/deleteContactError');
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccses = createAction('contacts/addContactSuccses');
export const addContactError = createAction('contacts/addContactError');
export const filter = createAction('filter/filter');
