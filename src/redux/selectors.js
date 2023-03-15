import { createSelector } from '@reduxjs/toolkit';
export const contactSelector = state => state.contacts.contacts.items;
export const filterSelector = state => state.filter.filter;

export const selectError = state => state.contacts.contacts.error;

export const selectLoadingState = state => state.contacts.contacts.isLoading;

export const selectVisibleList = createSelector(
  [contactSelector, filterSelector],
  (contactsList, filter) =>
    contactsList.filter(item => item.name.toLowerCase().includes(filter))
);
