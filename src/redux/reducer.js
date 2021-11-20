import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

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
  filter,
} from './actions';

const contactsListReducer = createReducer([], {
  [fetchContactsSuccses]: (_, { payload }) => payload,
  [addContactSuccses]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccses]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccses]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccses]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccses]: () => false,
  [deleteContactError]: () => false,
});

const filterReducers = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: filterReducers,
  loading,
});
