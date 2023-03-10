import ContactForm from './ContactForms/ContactForm';

import ContactList from './ContactList/ContactList';
import Filter from './Filter';

export const App = () => {
  return (
    <div>
      <>
        <div className="form">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    </div>
  );
};
