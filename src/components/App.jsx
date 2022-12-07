import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const onFormInput = evt => {
    setFilter(evt.target.value);
  };

  const onAddContact = data => {
    data.id = nanoid();
    const checkContact = contacts.find(contact => contact.name === data.name);

    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : setContacts([...contacts, data]);
  };

  const onFilterContacts = () => {
    const filterToLowerCase = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(filterToLowerCase)
    );
  };

  const onDeleteContact = idContact => {
    setContacts(prevState =>
      prevState.filter(contact => idContact !== contact.id)
    );
  };

  useEffect(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStorageContacts);

    if (parsedContacts !== null && parsedContacts.length > 0) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onFormInput} type="text" name="filter" value={filter} />

      <ContactList contacts={onFilterContacts()} onDelete={onDeleteContact} />
    </div>
  );
};
