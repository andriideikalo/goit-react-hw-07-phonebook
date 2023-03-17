import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleList } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import {
  ContactItemStyled,
  ButtonItemStyled,
  ContactNameItemStyled,
} from '../ContactList/ContactItem/ContactItemStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleList = useSelector(selectVisibleList);

  return (
    <ol>
      {visibleList.length !== 0 ? (
        visibleList.map(({ id, name, phone }) => (
          <ContactItemStyled key={id}>
            <ContactNameItemStyled>{name} </ContactNameItemStyled>
            <ContactNameItemStyled> {phone}</ContactNameItemStyled>
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
