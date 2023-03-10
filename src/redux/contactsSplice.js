import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Wlada', number: '227-91-27' },
    { id: 'id-6', name: 'Oleksey', number: '227-91-28' },
    { id: 'id-7', name: 'Andrey', number: '227-91-29' },
    { id: 'id-8', name: 'Pavel', number: '227-91-30' },
    { id: 'id-9', name: 'Tanya', number: '227-91-31' },
    { id: 'id-10', name: 'THermione', number: '227-91-32' },
    { id: 'id-11', name: 'Eden', number: '227-91-33' },
    { id: 'id-12', name: 'Eden Tanya', number: '227-91-34' },
    { id: 'id-13', name: 'Kline Tanya', number: '227-91-35' },
    { id: 'id-14', name: 'Simpson Tanya', number: '227-91-36' },
    { id: 'id-15', name: 'Rosie Tanya', number: '227-91-37' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
