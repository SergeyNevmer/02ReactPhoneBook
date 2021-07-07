import React from "react";
import { v4 as uuidv4 } from "uuid";
import Sections from "./Sections/Sections";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

function filterContacts(contacts, filter) {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}

export default class App extends React.Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      const contacts = JSON.parse(persistedContacts);
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, contacts } = this.state;

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, id: uuidv4(), number: prevState.number },
      ],
    }));
    this.resetInput();
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  resetInput = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    const filterContact = filterContacts(contacts, filter);
    return (
      <>
        <Sections sectionName="Phonebook">
          <ContactForm
            value={name}
            number={number}
            change={this.handleChange}
            submit={this.handleSubmit}
            onCheckingСontacts={this.checkingСontacts}
          />
        </Sections>
        <Sections sectionName="Contacts">
          {contacts.length === 0 ? (
            <h3>No give contacts</h3>
          ) : (
            <>
              <Filter value={filter} change={this.handleFilter} />
              <ContactList
                arrayContacts={filterContact}
                deleteContact={this.deleteContact}
              />
            </>
          )}
        </Sections>
      </>
    );
  }
}
