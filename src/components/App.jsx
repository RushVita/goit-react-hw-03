import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "modern-normalize";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const [filter, setFilter] = useState("");

  const handleContact = (e) => {
    return setFilter(e);
  };

  const visibleContacts = contacts.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const deleteContact = (userName) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((item) => item.name !== userName);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox inputValue={filter} onFilter={handleContact} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
