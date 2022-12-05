import PropTypes from 'prop-types';
import { Component } from 'react';

import { BtnAddContact } from './ContactForm.styled';
import { FilterStyle } from 'components/Filter/Filter.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="contact_name">
            Name
            <FilterStyle
              id="contact_name"
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onFormInput}
            />
          </label>
          Number
          <label htmlFor="contact_id">
            <FilterStyle
              id="contact_id"
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onFormInput}
            />
          </label>
          <BtnAddContact type="submit">Add contact</BtnAddContact>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};
