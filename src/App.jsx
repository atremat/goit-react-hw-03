import "modern-normalize";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";

//default contactList
const contactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  //all contacts
  const [contacts, setContacts] = useState(() => {
    //contactlist from localstorage
    const lS = window.localStorage.getItem("contacts");
    //if localstorage contains contactlist and contactlist is not empty then download from localstorage
    if (lS && JSON.parse(lS).length > 0) {
      return JSON.parse(window.localStorage.getItem("contacts"));
    }

    //if localstorage does not exist or empty, download default
    return contactList;
  });

  //search value input
  const [searchValue, setSearchValue] = useState("");

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

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchValue} onChange={handleChangeSearch} />
      <ContactList
        contacts={filteredContacts}
        onChange={handleChangeSearch}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}

export default App;
