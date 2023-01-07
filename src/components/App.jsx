import { Component } from 'react';

import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contactsList');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }

  handelFormSubmit = data => {
    const { name } = data;
    const { contacts } = this.state;
    const sameName = contacts.some(el => el.name === name);

    sameName
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), ...data }],
        }));
  };
  handleFilterData = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };
  getFilteredContacts() {
    const { filter, contacts } = this.state;

    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { handelFormSubmit, handleFilterData, removeContact } = this;
    const filtredContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={handelFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter title="Find contacts by name" filter={handleFilterData} />
          <ContactList contacts={filtredContacts} onClick={removeContact} />
        </Section>
      </>
    );
  }
}

export default App;
