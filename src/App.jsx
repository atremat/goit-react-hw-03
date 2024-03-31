import "modern-normalize";
import "./App.css";
import { PiUserSquareFill } from "react-icons/pi";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactEditForm from "./components/ContactEditForm/ContactEditForm";
import { useEffect, useState } from "react";
import defaultContactList from "./data/contactList.json"; //default contactList

const App = () => {
  //all contacts
  const [contacts, setContacts] = useState(() => {
    //download contactlist from localstorage
    const lS = window.localStorage.getItem("contacts");
    //if localstorage contains contactlist and contactlist is not empty then download from localstorage
    if (lS && JSON.parse(lS).length > 0) {
      return JSON.parse(window.localStorage.getItem("contacts"));
    }

    //if localstorage does not exist or empty, download default
    return defaultContactList;
  });

  //search value input
  const [searchValue, setSearchValue] = useState("");

  //selected contact to edit
  const [contactToEdit, setContactToEdit] = useState(null);

  //filtered contacts which contain searchValue
  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(searchValue.trim().toLowerCase());
  });

  //save to localstorage when contacts changed
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //handles searchValue state
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  //handles contacts state
  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  //handle delete contact from contacts
  const handleDeleteContact = (id) => {
    //filtered contacts without contact with id==id
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  //handle edit existing contact
  const handleEditContact = (contact) => {
    setContactToEdit(contact);
  };

  //save edited contact
  const handleSaveEditedContact = (editedContact) => {
    const index = contacts.findIndex(
      (contact) => contact.id === editedContact.id
    );
    const newContacts = contacts.toSpliced(index, 1, editedContact);
    setContacts(newContacts);
    handleCancel();
  };

  //handle cancel btn
  const handleCancel = () => {
    setContactToEdit(null);
  };

  return (
    <div className="main">
      <h1 className="phonebook-header">
        <PiUserSquareFill className="phonebook-icon" />
        Phonebook
      </h1>
      {contactToEdit ? (
        <ContactEditForm
          contactToEdit={contactToEdit}
          onSaveEditedContact={handleSaveEditedContact}
          onCancel={handleCancel}
        />
      ) : (
        <ContactForm onAddContact={handleAddContact} />
      )}
      <SearchBox value={searchValue} onChange={handleChangeSearch} />
      <ContactList
        contacts={filteredContacts}
        onChange={handleChangeSearch}
        onDelete={handleDeleteContact}
        onEditContact={handleEditContact}
      />
    </div>
  );
};

export default App;
