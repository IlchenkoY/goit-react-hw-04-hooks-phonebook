import shortid from 'shortid';
import { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/Contactlist/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './components/Container/Container';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        contactsEl =>
          contactsEl.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => {
      return [contact, ...prevState];
    });
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContactsHandler = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter),
    );
  };

  const deleteContactHandler = id => {
    const filterContacts = contacts.filter(contactsEl => contactsEl.id !== id);
    setContacts(filterContacts);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter value={filter} onChange={changeFilter} />
      ) : (
        <p>You have no contacts yet</p>
      )}
      {filteredContactsHandler().length !== 0 && (
        <ContactList
          contacts={filteredContactsHandler()}
          onDelete={deleteContactHandler}
        />
      )}
    </Container>
  );
};

export { App };
