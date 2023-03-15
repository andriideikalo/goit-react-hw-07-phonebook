import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector, filterSelector } from 'redux/selectors';
import { deleteContact } from '../../redux/operations';
import {
  ContactItemStyled,
  ButtonItemStyled,
  ContactNameItemStyled,
} from '../ContactList/ContactItem/ContactItemStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(contactSelector);
  const filterQuery = useSelector(filterSelector);
  const visibleList = contactList.filter(item =>
    item.name.toLowerCase().includes(filterQuery)
  );

  return (
    <ol>
      {visibleList.length !== 0 ? (
        visibleList.map(({ id, name, number }) => (
          <ContactItemStyled key={id}>
            <ContactNameItemStyled>{name} </ContactNameItemStyled>
            <ContactNameItemStyled> {number}</ContactNameItemStyled>
            <ButtonItemStyled
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ButtonItemStyled>
          </ContactItemStyled>
        ))
      ) : (
        <h2>The list of contacts is empty</h2>
      )}
    </ol>
  );
};

export default ContactList;
