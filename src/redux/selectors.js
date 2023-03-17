import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;

export const selectError = state => state.contacts.contacts.error;

export const selectVisibleList = createSelector(
  [selectContacts, selectFilter],
  (contactsList, filter) =>
    contactsList.filter(item => item.name.toLowerCase().includes(filter))
);
