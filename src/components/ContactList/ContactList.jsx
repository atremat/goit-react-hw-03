import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, onEditContact }) => {
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
};

export default ContactList;
