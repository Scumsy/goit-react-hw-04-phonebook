import { nanoid } from 'nanoid';
import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const savedContacts = JSON.parse(localContacts);
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  onFormInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onAddContact = data => {
    data.id = nanoid();
    const { contacts } = this.state;
    const checkContact = contacts.find(contact => contact.name === data.name);

    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(filterToLowerCase)
    );
  };

  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => idContact !== contact.id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.onFilterContacts();

    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 32,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <ContactForm
          onSubmit={this.onAddContact}
          // onSubmitForm={this.onSubmitForm}
          // onFormInput={this.onFormInput}
          // onAddContact={this.onAddContact}
        />

        <h2>Contacts</h2>
        <Filter
          onChange={this.onFormInput}
          type="text"
          name="filter"
          value={filter}
        />

        <ContactList
          contacts={filteredContacts}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}
