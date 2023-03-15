import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSplice';
import { filterReducer } from './filterSplice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
