import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingState, selectVisibleList } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import {
  ContactItemStyled,
  ButtonItemStyled,
  ContactNameItemStyled,
} from '../ContactList/ContactItem/ContactItemStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingState);
  const visibleList = useSelector(selectVisibleList);

  return (
    <ol>
      {visibleList.length === 0 && !isLoading ? (
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
