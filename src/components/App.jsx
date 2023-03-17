import ContactForm from './ContactForms/ContactForm';
import React, { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from '../redux/operations';
import { selectError, selectLoadingState } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingState);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <>
        <div className="form">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && (
            <p>Wait while the download is in progress...</p>
          )}
          <ContactList />
        </div>
      </>
    </div>
  );
};
