import PropTypes from 'prop-types';
import { useState } from 'react';

import { BtnAddContact } from './ContactForm.styled';
import { FilterStyle } from 'components/Filter/Filter.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormInput = evt => {
    const chooseOption = evt.target.name;

    switch (chooseOption) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onNewSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <>
      <form onSubmit={onNewSubmit}>
        <label htmlFor="contact_name">
          Name
          <FilterStyle
            id="contact_name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onFormInput}
          />
        </label>
        Number
        <label htmlFor="contact_id">
          <FilterStyle
            id="contact_id"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onFormInput}
          />
        </label>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
