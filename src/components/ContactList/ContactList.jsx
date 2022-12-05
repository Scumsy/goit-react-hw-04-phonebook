// import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import {
  ContactListStyle,
  ContactListItemStyle,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactListStyle>
        {contacts.map(({ id, name, number }) => (
          <ContactListItemStyle key={id}>
            <ContactListItem name={name} number={number} />
            <DeleteButton type="button" onClick={() => onDelete(id)}>
              Delete
            </DeleteButton>
          </ContactListItemStyle>
        ))}
      </ContactListStyle>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
