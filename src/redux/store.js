import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { contactsReducer } from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
