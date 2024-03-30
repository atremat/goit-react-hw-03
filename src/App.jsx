import "modern-normalize";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState } from "react";

const contactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => contactList);
  const [searchValue, setSearchValue] = useState("");

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(searchValue.trim().toLowerCase());
  });

  const handleChangeSearch = (e) => {
    console.log(`e.target.value = ${e.target.value}`);
    setSearchValue(e.target.value);
  };

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onChange={handleChangeSearch} />
      <ContactList contacts={filteredContacts} onChange={handleChangeSearch} />
    </div>
  );
}

export default App;
