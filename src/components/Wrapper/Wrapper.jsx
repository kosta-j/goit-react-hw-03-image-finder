import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import s from './Wrapper.module.css';

class Wrapper extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHanler = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.state.contacts.filter(item => item.name === data.name).length > 0
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContactHandler = contactID => {
    console.log(contactID);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactID),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className={s.wrapper}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHanler} />
        </Section>
        <Section title="Contacts">
          {contacts.length < 1 ? (
            <Notification text="Contact list is empty" />
          ) : (
            <>
              <Filter value={filter} onChange={this.changeFilter} />
              <ContactList
                contacts={filteredContacts}
                onDeleteBtnClick={this.deleteContactHandler}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}

export default Wrapper;
