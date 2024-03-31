import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete, onEditContact }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            onDelete={onDelete}
            onEditContact={onEditContact}
          />
        );
      })}
    </ul>
  );
}
