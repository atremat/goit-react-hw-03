import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} number={number} />;
      })}
    </ul>
  );
}
